import { useCallback, useEffect, useRef } from 'react';

import css from '../Styles/SkillsMap.module.scss'

/**
 * Force-directed map of the skill set. Every skill is a node sprung toward the hub
 * of each discipline it belongs to, so tools that span two disciplines settle
 * between them and the shape of the stack falls out of the data.
 *
 * Hand-rolled rather than pulled from d3-force: the whole simulation is ~60 lines
 * and the project has no graph dependency.
 */

const SPRING_PRIMARY = 0.0060;
const SPRING_SECONDARY = 0.0022;
const DAMPING = 0.86;
const LABEL_PAD_X = 15;
const LABEL_PAD_Y = 10;
const HUB_CLEARANCE = 64;
const HUB_LABEL_OFFSET = 18;

// Ambient motion. Everything here is deliberately slow and small — the map should
// look alive when you glance at it, never busy while you're reading it.
const TICK = 1 / 60;
const RING_SWAY = 0.022;        // radians the whole ring rocks through
const RING_SWAY_SPEED = 0.085;
const RING_BREATH = 0.016;      // fraction the ring expands and contracts by
const RING_BREATH_SPEED = 0.127;
const DRIFT_X = 2.4;            // pixels a node wanders from its settled spot
const DRIFT_Y = 1.9;

const LABEL_FONT = '600 11.5px Overpass, sans-serif';
const LABEL_FONT_BOLD = '700 11.5px Overpass, sans-serif';
const HUB_FONT = '700 12px Overpass, sans-serif';
const PAPER = '#FFFBFA';

// Ring seats, ordered so the heaviest clusters land opposite each other instead of
// crowding one corner. Categories are sorted by weight and dealt into these seats.
const SEATS = [0, 4, 2, 6, 1, 5, 3, 7];

const hexToRgba = (hex, alpha) => {
    const h = hex.trim().replace('#', '');
    const full = h.length === 3 ? h.split('').map(c => c + c).join('') : h;
    const n = parseInt(full, 16);
    return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${alpha})`;
};

const SkillsMap = ({ categories, skills, activeFilter, onHoverChange }) => {

    const canvasRef = useRef(null);
    const simRef = useRef(null);
    const filterRef = useRef(activeFilter);
    const hoverRef = useRef(null);
    const onHoverRef = useRef(onHoverChange);

    useEffect(() => { onHoverRef.current = onHoverChange }, [onHoverChange]);
    useEffect(() => { filterRef.current = activeFilter }, [activeFilter]);

    const setHover = useCallback(node => {
        const previous = hoverRef.current;
        if (previous === node) return;

        // Set the highlight directly rather than waiting for the loop to ease it in:
        // hover feedback should be instant, and with reduced motion there is no loop.
        if (previous) previous.glow = 0;
        if (node) node.glow = 1;
        hoverRef.current = node;

        if (simRef.current) simRef.current.paint();
        if (onHoverRef.current) onHoverRef.current(node ? { ...node.skill } : null);
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
        const colorOf = categories.reduce((acc, c) => ({ ...acc, [c.id]: c.color }), {});

        let width = 0;
        let height = 0;

        const byWeight = [...categories].sort((a, b) => b.weight - a.weight);
        const seatOf = byWeight.reduce((acc, cat, i) => ({ ...acc, [cat.id]: SEATS[i] }), {});

        const hubs = categories.map(cat => ({
            id: cat.id,
            label: cat.label,
            color: cat.color,
            weight: cat.weight,
            seat: seatOf[cat.id],
            x: 0, y: 0, tx: 0, ty: 0,
            w: 80,
        }));
        const hubById = hubs.reduce((acc, h) => ({ ...acc, [h.id]: h }), {});

        let clock = 0;

        const nodes = skills.map((skill, i) => ({
            skill,
            primary: skill.tags[0],
            color: colorOf[skill.tags[0]] || colorOf.Core,
            x: 0, y: 0, vx: 0, vy: 0,
            w: 60,
            alpha: 1,
            glow: 0,
            // Coprime-ish frequencies and scattered phases, so no two nodes drift in
            // step and the field never visibly pulses as one.
            fx: 0.21 + (i % 7) * 0.013,
            fy: 0.17 + (i % 5) * 0.017,
            px: (i * 2.399) % (Math.PI * 2),
            py: (i * 1.113) % (Math.PI * 2),
        }));

        const measure = () => {
            ctx.font = LABEL_FONT;
            nodes.forEach(n => { n.w = ctx.measureText(n.skill.title).width + 14 });
            ctx.font = HUB_FONT;
            hubs.forEach(h => { h.w = ctx.measureText(h.label.toUpperCase()).width + 22 });
        };

        // Hubs sit on an ellipse; the active one is pulled to the middle and the
        // rest are pushed outward so its cluster gets the room.
        //
        // The ring also sways and breathes very slightly. Because every node is
        // sprung to its hubs, that slow movement propagates outward through the
        // whole constellation — the field never fully comes to rest.
        const placeHubs = () => {
            const filter = filterRef.current;
            const cx = width / 2;
            const cy = height / 2;
            const breathe = 1 + Math.sin(clock * RING_BREATH_SPEED) * RING_BREATH;
            const sway = Math.sin(clock * RING_SWAY_SPEED) * RING_SWAY;
            const rx = width * 0.38 * breathe;
            const ry = height * 0.38 * breathe;

            hubs.forEach(hub => {
                const angle = (hub.seat / hubs.length) * Math.PI * 2 - Math.PI / 2 + sway;
                if (filter === hub.id) {
                    hub.tx = cx;
                    hub.ty = cy;
                } else {
                    const push = filter ? 1.3 : 1;
                    // Clamped, or a pushed-out hub drifts off-canvas and its name
                    // gets clipped by the edge.
                    const marginX = hub.w / 2 + 12;
                    hub.tx = Math.max(marginX, Math.min(width - marginX,
                        cx + Math.cos(angle) * rx * push));
                    hub.ty = Math.max(34, Math.min(height - 16,
                        cy + Math.sin(angle) * ry * push));
                }
            });
        };

        const seed = () => {
            placeHubs();
            hubs.forEach(h => { h.x = h.tx; h.y = h.ty });
            nodes.forEach((n, i) => {
                const hub = hubById[n.primary];
                const angle = (i / nodes.length) * Math.PI * 2;
                n.x = hub.x + Math.cos(angle) * 60;
                n.y = hub.y + Math.sin(angle) * 60;
                n.vx = 0;
                n.vy = 0;
            });
        };

        const step = () => {
            const filter = filterRef.current;

            clock += TICK;
            placeHubs();
            hubs.forEach(h => {
                h.x += (h.tx - h.x) * 0.07;
                h.y += (h.ty - h.y) * 0.07;
            });

            nodes.forEach(n => {
                const active = !filter || n.skill.tags.includes(filter);
                n.alpha += ((active ? 1 : 0.12) - n.alpha) * 0.08;

                // Spring toward every discipline the skill belongs to. Under a filter
                // the matching hub takes over so the cluster tightens.
                n.skill.tags.forEach((tag, idx) => {
                    const hub = hubById[tag];
                    if (!hub) return;
                    let k = idx === 0 ? SPRING_PRIMARY : SPRING_SECONDARY;
                    // Only a modest boost — anything stronger overpowers the label
                    // separation and the focused cluster collapses into a knot.
                    if (filter) k = tag === filter ? SPRING_PRIMARY * 1.3 : k * 0.25;
                    n.vx += (hub.x - n.x) * k;
                    n.vy += (hub.y - n.y) * k;
                });

                hubs.forEach(hub => {
                    // Clear of the hub disc.
                    const dx = n.x - hub.x;
                    const dy = n.y - hub.y;
                    const dist = Math.hypot(dx, dy) || 1;
                    if (dist < HUB_CLEARANCE) {
                        const push = (HUB_CLEARANCE - dist) / dist * 0.14;
                        n.vx += dx * push;
                        n.vy += dy * push;
                    }

                    // And clear of the hub's name, which sits above the disc.
                    const lx = n.x - hub.x;
                    const ly = n.y - (hub.y - HUB_LABEL_OFFSET - 8);
                    const overX = (hub.w + n.w) / 2 - Math.abs(lx);
                    const overY = 26 - Math.abs(ly);
                    if (overX > 0 && overY > 0) {
                        if (overX / hub.w < overY / 26) {
                            n.vx += (lx < 0 ? -1 : 1) * overX * 0.08;
                        } else {
                            n.vy += (ly < 0 ? -1 : 1) * overY * 0.1;
                        }
                    }
                });
            });

            // Rectangular separation on the label boxes, not the dots — that's what
            // actually keeps the text readable.
            for (let i = 0; i < nodes.length; i++) {
                const a = nodes[i];
                for (let j = i + 1; j < nodes.length; j++) {
                    const b = nodes[j];
                    const dx = b.x - a.x;
                    const dy = b.y - a.y;
                    const minX = (a.w + b.w) / 2 + LABEL_PAD_X;
                    const minY = 14 + LABEL_PAD_Y;
                    const overlapX = minX - Math.abs(dx);
                    const overlapY = minY - Math.abs(dy);
                    if (overlapX <= 0 || overlapY <= 0) continue;

                    // Resolve along whichever axis needs the least movement.
                    if (overlapX / minX < overlapY / minY) {
                        const push = (dx < 0 ? -1 : 1) * overlapX * 0.07;
                        a.vx -= push;
                        b.vx += push;
                    } else {
                        const push = (dy < 0 ? -1 : 1) * overlapY * 0.085;
                        a.vy -= push;
                        b.vy += push;
                    }
                }
            }

            nodes.forEach(n => {
                n.vx *= DAMPING;
                n.vy *= DAMPING;
                n.x += n.vx;
                n.y += n.vy;

                const marginX = n.w / 2 + 10;
                n.x = Math.max(marginX, Math.min(width - marginX, n.x));
                n.y = Math.max(18, Math.min(height - 18, n.y));

                const hovered = hoverRef.current === n;
                n.glow += ((hovered ? 1 : 0) - n.glow) * 0.2;
            });
        };

        const draw = () => {
            const filter = filterRef.current;
            const hovered = hoverRef.current;

            ctx.clearRect(0, 0, width, height);

            // A small drift applied at paint time rather than as a force: the layout
            // stays exactly where the simulation settled it, and the nodes still
            // never sit perfectly still.
            nodes.forEach(n => {
                n.rx = n.x + Math.sin(clock * n.fx + n.px) * DRIFT_X;
                n.ry = n.y + Math.cos(clock * n.fy + n.py) * DRIFT_Y;
            });

            // Tethers first, so labels always sit on top of them.
            ctx.lineWidth = 1;
            nodes.forEach(n => {
                const linked = hovered === n;
                // Each tether breathes on its node's own cycle, so the web reads as
                // a living system rather than a static diagram.
                const shimmer = 0.82 + 0.18 * Math.sin(clock * n.fx * 2 + n.px);
                n.skill.tags.forEach((tag, idx) => {
                    const hub = hubById[tag];
                    if (!hub) return;
                    const base = idx === 0 ? 0.3 : 0.14;
                    const alpha = n.alpha * (linked ? 0.85 : base * 0.5 * shimmer);
                    if (alpha < 0.02) return;
                    ctx.strokeStyle = hexToRgba(hub.color, alpha);
                    ctx.lineWidth = linked ? 1.5 : 1;
                    ctx.beginPath();
                    ctx.moveTo(hub.x, hub.y);
                    ctx.lineTo(n.rx, n.ry);
                    ctx.stroke();
                });
            });

            // Nodes. Every label gets a paper-coloured halo so it stays readable
            // where it crosses a tether.
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.lineJoin = 'round';
            nodes.forEach(n => {
                if (n.alpha < 0.03) return;
                const lift = n.glow;

                ctx.fillStyle = hexToRgba(n.color, n.alpha);
                ctx.beginPath();
                ctx.arc(n.rx, n.ry - 11, 3 + lift * 2, 0, Math.PI * 2);
                ctx.fill();

                ctx.font = lift > 0.5 ? LABEL_FONT_BOLD : LABEL_FONT;
                ctx.strokeStyle = PAPER;
                ctx.lineWidth = 3.5;
                ctx.strokeText(n.skill.title, n.rx, n.ry + 3);
                ctx.fillStyle = `rgba(25, 23, 22, ${n.alpha * (0.72 + lift * 0.28)})`;
                ctx.fillText(n.skill.title, n.rx, n.ry + 3);
            });

            // Hubs last, so a discipline name is never buried under a skill.
            hubs.forEach(hub => {
                const dim = filter && filter !== hub.id ? 0.25 : 1;
                const r = 5 + Math.sqrt(hub.weight) * 1.5;
                // Each hub's halo breathes on its own offset, like a slow pulse
                // through the system.
                const pulse = Math.sin(clock * 0.42 + hub.seat * 0.9);

                ctx.fillStyle = hexToRgba(hub.color, (0.15 + pulse * 0.045) * dim);
                ctx.beginPath();
                ctx.arc(hub.x, hub.y, r + 14 + pulse * 3, 0, Math.PI * 2);
                ctx.fill();

                ctx.fillStyle = hexToRgba(hub.color, dim);
                ctx.beginPath();
                ctx.arc(hub.x, hub.y, r, 0, Math.PI * 2);
                ctx.fill();

                ctx.font = HUB_FONT;
                const label = hub.label.toUpperCase();
                const ly = hub.y - r - 18;
                ctx.strokeStyle = PAPER;
                ctx.lineWidth = 5;
                ctx.strokeText(label, hub.x, ly);
                ctx.fillStyle = `rgba(25, 23, 22, ${0.9 * dim})`;
                ctx.fillText(label, hub.x, ly);
            });
        };

        const resize = () => {
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            const rect = canvas.getBoundingClientRect();
            const nextW = rect.width;
            const nextH = rect.height;
            if (!nextW || !nextH) return;

            const first = width === 0;
            width = nextW;
            height = nextH;
            canvas.width = Math.round(width * dpr);
            canvas.height = Math.round(height * dpr);
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            measure();
            if (first) seed();
        };

        const settle = iterations => {
            for (let i = 0; i < iterations; i++) step();
        };

        let frame = null;

        const loop = () => {
            step();
            draw();
            frame = window.requestAnimationFrame(loop);
        };

        const stop = () => {
            if (frame !== null) {
                window.cancelAnimationFrame(frame);
                frame = null;
            }
        };

        const start = () => {
            if (frame === null && !reduceMotion.matches && !document.hidden) {
                frame = window.requestAnimationFrame(loop);
            }
        };

        resize();
        // Pre-settle so the map opens as a readable layout rather than a scramble,
        // and so a hidden tab (where rAF never fires) still paints something.
        settle(800);
        draw();
        start();

        simRef.current = {
            hitTest: (px, py) => {
                let best = null;
                let bestDist = Infinity;
                for (const n of nodes) {
                    if (n.alpha < 0.3) continue;
                    // Hit-test where the node is drawn, not where it settled.
                    const dx = Math.abs(px - (n.rx ?? n.x));
                    const dy = Math.abs(py - (n.ry ?? n.y));
                    if (dx > n.w / 2 || dy > 16) continue;
                    const d = dx + dy;
                    if (d < bestDist) { bestDist = d; best = n }
                }
                return best;
            },
            paint: draw,
            // With no loop running (reduced motion, or a hidden tab) nothing would
            // move the layout to its new targets, so settle it here instead.
            repaint: () => {
                if (frame === null) settle(300);
                draw();
            },
        };

        const onVisibility = () => (document.hidden ? stop() : start());
        const onMotionPreference = () => {
            stop();
            if (reduceMotion.matches) { settle(260); draw() } else start();
        };

        const observer = new ResizeObserver(() => {
            resize();
            settle(reduceMotion.matches ? 300 : 60);
            draw();
        });
        observer.observe(canvas);

        // Re-measure once the webfont lands, or every label box is sized for the fallback.
        if (document.fonts && document.fonts.ready) {
            document.fonts.ready.then(() => { measure(); draw() });
        }

        document.addEventListener('visibilitychange', onVisibility);
        reduceMotion.addEventListener('change', onMotionPreference);

        return () => {
            stop();
            observer.disconnect();
            simRef.current = null;
            document.removeEventListener('visibilitychange', onVisibility);
            reduceMotion.removeEventListener('change', onMotionPreference);
        };
    }, [categories, skills]);

    // Reduced-motion users get no loop, so re-settle when the filter changes.
    useEffect(() => {
        if (simRef.current) simRef.current.repaint();
    }, [activeFilter]);

    const handlePointerMove = useCallback(event => {
        const sim = simRef.current;
        if (!sim) return;
        const rect = event.currentTarget.getBoundingClientRect();
        setHover(sim.hitTest(event.clientX - rect.left, event.clientY - rect.top));
    }, [setHover]);

    const handlePointerLeave = useCallback(() => setHover(null), [setHover]);

    return (
        <canvas
            ref={canvasRef}
            className={css.canvas}
            onPointerMove={handlePointerMove}
            onPointerLeave={handlePointerLeave}
            aria-hidden="true"
        />
    );
};

export default SkillsMap;
