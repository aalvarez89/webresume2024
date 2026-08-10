import { useCallback, useEffect, useMemo, useState } from "react";

import { motion, useIsPresent } from "framer-motion";

import SkillsMap from "./SkillsMap";

import palette from "../Styles/App.module.scss"
import css from "../Styles/Skills.module.scss"

// Order drives both the chip row and the hub positions on the map.
const CATEGORIES = [
  { id: "Core",       label: "core",       color: palette.grn },
  { id: "Frontend",   label: "frontend",   color: palette.pnk },
  { id: "Backend",    label: "backend",    color: palette.orn },
  { id: "Devops",     label: "devops",     color: palette.vio },
  { id: "Database",   label: "database",   color: palette.slv },
  { id: "Design",     label: "design",     color: palette.blu },
  { id: "Blockchain", label: "blockchain", color: palette.ylw },
  { id: "Media",      label: "media",      color: palette.red },
  // { id: "Specialization", label: "special",      color: palette.red },
];

// First tag is the primary — it's what colours the skill at rest.
const SKILL_GROUPS = [
  {
    section: "Languages",
    skills: [
      { title: "JavaScript", tags: ["Core", "Frontend"] },
      { title: "Node",       tags: ["Core", "Backend"] },
      { title: "TypeScript", tags: ["Core", "Frontend"] },
      { title: "Solidity",   tags: ["Blockchain", "Core"] },
      { title: "C++",        tags: ["Core"] },
      { title: "Python",     tags: ["Backend"] },
      { title: "SQL",        tags: ["Database", "Core", "Backend"] },
    ],
  },
  {
    section: "OS",
    skills: [
      { title: "Windows",  tags: ["Core"] },
      { title: "WSL",      tags: ["Core", "Devops"] },
      { title: "Unix",     tags: ["Core"] },
      { title: "Terminal", tags: ["Core", "Backend"] },
    ],
  },
  {
    section: "Operations",
    skills: [
      { title: "Git",    tags: ["Core"] },
      { title: "Github", tags: ["Core"] },
      { title: "Agile",  tags: ["Devops", "Core"] },
      { title: "Scrum",  tags: ["Devops", "Core"] },
      { title: "Kanban", tags: ["Devops"] },
      { title: "Jira",   tags: ["Devops", "Core"] },
      { title: "CI/CD",  tags: ["Devops"] },
    ],
  },
  {
    section: "Libraries",
    skills: [
      { title: "React",               tags: ["Frontend"] },
      { title: "Redux",               tags: ["Frontend"] },
      { title: "Router",              tags: ["Frontend"] },
      { title: "Jest",                tags: ["Frontend"] },
      { title: "PyTest",              tags: ["Backend", "Frontend"] },
      { title: "jQuery",              tags: ["Frontend"] },
      { title: "Electron",            tags: ["Frontend"] },
      { title: "Handlebars",          tags: ["Frontend"] },
      { title: "Ajax",                tags: ["Frontend", "Backend"] },
      { title: "Web Payment API",     tags: ["Frontend", "Backend"] },
      { title: "Bitcoin Payment API", tags: ["Blockchain", "Backend"] },
      { title: "Express",             tags: ["Backend"] },
      { title: "Django",              tags: ["Backend"] },
      { title: "NGINX",               tags: ["Backend"] },
      { title: "bcrypt",              tags: ["Backend", "Frontend", "Blockchain"] },
      { title: "Web Sockets",         tags: ["Backend", "Frontend"] },
      { title: "Framer Motion",       tags: ["Design", "Frontend"] },
      { title: "React Flow",          tags: ["Design", "Frontend"] },
      { title: "MaterialUI",          tags: ["Design", "Frontend"] },
      { title: "Bootstrap",           tags: ["Design", "Frontend"] },
      { title: "Recharts",            tags: ["Design", "Frontend"] },
      { title: "KendoJS",             tags: ["Design", "Frontend"] },
      { title: "Sequelize",           tags: ["Database", "Backend"] },
      { title: "Mongoose",            tags: ["Database", "Backend"] },
    ],
  },
  {
    section: "Technologies",
    skills: [
      { title: "HTML",               tags: ["Frontend"] },
      { title: "CSS",                tags: ["Frontend", "Design"] },
      { title: "SVG",                tags: ["Design", "Frontend"] },
      { title: "CSS Grid",           tags: ["Frontend", "Design"] },
      { title: "FlexBox",            tags: ["Frontend", "Design"] },
      { title: "Media Queries",      tags: ["Frontend", "Design"] },
      { title: "SASS",               tags: ["Frontend"] },
      { title: "LESS",               tags: ["Frontend"] },
      { title: "Web Animation API",  tags: ["Design", "Frontend"] },
      { title: "Web Server",         tags: ["Backend"] },
      { title: "HTTP/HTTPS",         tags: ["Backend"] },
      { title: "RESTful API",        tags: ["Backend"] },
      { title: "Niagara",            tags: ["Backend"] },
      { title: "Modules & Packages", tags: ["Backend"] },
      { title: "dotenv",             tags: ["Backend"] },
      { title: "Events",             tags: ["Backend"] },
      { title: "JSON",               tags: ["Backend", "Frontend"] },
      { title: "Streams",            tags: ["Backend"] },
      { title: "Protocols",          tags: ["Backend"] },
      { title: "TCP/UDP",            tags: ["Backend", "Media"] },
      { title: "rtmp",               tags: ["Media", "Backend"] },
      { title: "WebRTC",             tags: ["Media", "Backend"] },
      { title: "smtp",               tags: ["Backend"] },
      { title: "ftp",                tags: ["Backend"] },
      { title: "ssh",                tags: ["Backend"] },
      { title: "Web3",               tags: ["Blockchain", "Frontend", "Backend"] },
      { title: "Bash",               tags: ["Core", "Backend"] },
      { title: "Powershell",         tags: ["Core", "Backend"] },
      { title: "AWS",                tags: ["Devops"] },
      { title: "Firebase",           tags: ["Devops"] },
      { title: "GCP",                tags: ["Devops"] },
      { title: "Azure",              tags: ["Devops"] },
      { title: "Docker",             tags: ["Devops"] },
      { title: "npm",                tags: ["Devops"] },
      { title: "PostgreSQL",         tags: ["Database"] },
      { title: "Tiger Data",         tags: ["Database"] },
      { title: "MySQL",              tags: ["Database"] },
      { title: "Firestore",          tags: ["Database"] },
      { title: "MongoDB",            tags: ["Database"] },
      { title: "Oracle",             tags: ["Database"] },
    ],
  },
  {
    section: "Software",
    skills: [
      { title: "Adobe PS",     tags: ["Media", "Design"] },
      { title: "Adobe AE",     tags: ["Media", "Design"] },
      { title: "Affinity",     tags: ["Design"] },
      { title: "Aseprite",     tags: ["Media", "Design"] },
      { title: "Final Cut",    tags: ["Media"] },
      { title: "Ableton Live", tags: ["Media"] },
    ],
  },
];

const COMPACT_QUERY = "(max-width: 767px)";

// 87 labels can't be laid out legibly on a phone, so narrow screens get the list
// instead of the map.
const useIsCompact = () => {
  const [compact, setCompact] = useState(
    () => typeof window !== "undefined" && window.matchMedia(COMPACT_QUERY).matches
  );

  useEffect(() => {
    const mq = window.matchMedia(COMPACT_QUERY);
    const onChange = event => setCompact(event.matches);
    setCompact(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return compact;
};

const Skills = () => {

  const isPresent = useIsPresent();
  const isCompact = useIsCompact();

  const [skillsFilter, setSkillsFilter] = useState("")
  const [hovered, setHovered] = useState(null)

  const handleFilter = active => {
    setSkillsFilter(active === skillsFilter ? "" : active)
  }

  // Static: the counts never change, and stable `categories` / `skills` identities
  // keep the simulation from being torn down and reseeded on every filter change.
  const { categories, skills, weights, total } = useMemo(() => {
    const all = SKILL_GROUPS.flatMap(group =>
      group.skills.map(skill => ({ ...skill, section: group.section }))
    );
    const counts = all.reduce((acc, skill) => {
      skill.tags.forEach(tag => { acc[tag] = (acc[tag] || 0) + 1 });
      return acc;
    }, {});

    return {
      categories: CATEGORIES.map(cat => ({ ...cat, weight: counts[cat.id] || 0 })),
      skills: all,
      weights: counts,
      total: all.length,
    };
  }, []);

  const shown = skillsFilter ? (weights[skillsFilter] || 0) : total;

  const handleHoverChange = useCallback(skill => setHovered(skill), []);

  return (
    <div className={css.skills}>

      <main className={css.content}>

        <header className={css.header}>
          <h1 className={css.title}>
            <span className={css.titleTop}>WHAT I</span>
            <span className={css.titleBot}>
              BUILD{" "}
              <span className={`${css.accent} ${skillsFilter ? css[`cat_${skillsFilter}`] : ""}`}>
                WITH
              </span>
            </span>
          </h1>
        </header>

        <div className={css.categoryWrapper} role="group" aria-label="Filter skills by discipline">
          {categories.map(cat => (
            <button
              key={cat.id}
              type="button"
              className={`${css.category} ${css[`cat_${cat.id}`]} ${skillsFilter === cat.id ? css.categoryActive : ""}`}
              aria-pressed={skillsFilter === cat.id}
              onClick={() => handleFilter(cat.id)}
            >
              {cat.label}
              <span className={css.categoryCount}>{cat.weight}</span>
            </button>
          ))}
        </div>

        {isCompact ? (
          <SkillList groups={SKILL_GROUPS} skillsFilter={skillsFilter} total={total} shown={shown} />
        ) : (
          <>
            <motion.div
              className={css.stage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.8, delay: 0.2 } }}
            >
              <SkillsMap
                categories={categories}
                skills={skills}
                activeFilter={skillsFilter}
                onHoverChange={handleHoverChange}
              />
            </motion.div>

            <div className={css.readout}>
              <p className={css.status} aria-live="polite">
                {skillsFilter ? `${shown} of ${total} skills` : `${total} skills`}
              </p>

              {hovered ? (
                <p className={css.detail}>
                  <span className={css.detailTitle}>{hovered.title}</span>
                  <span className={css.detailSection}>{hovered.section}</span>
                  <span className={css.detailTags}>
                    {hovered.tags.map(tag => (
                      <span key={tag} className={`${css.detailTag} ${css[`cat_${tag}`]}`}>{tag}</span>
                    ))}
                  </span>
                </p>
              ) : (
                <p className={`${css.detail} ${css.detailEmpty}`}>Hover a node to read its disciplines</p>
              )}
            </div>

            {/* The map is canvas, so it is invisible to screen readers and crawlers.
                This carries the same content in real markup. */}
            <div className={css.srOnly}>
              <h2>All skills by group</h2>
              {SKILL_GROUPS.map(group => (
                <section key={group.section}>
                  <h3>{group.section}</h3>
                  <ul>
                    {group.skills.map(skill => (
                      <li key={skill.title}>{skill.title} — {skill.tags.join(", ")}</li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </>
        )}

      </main>

      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 0.7, ease: "circOut" } }}
        exit={{ scaleX: 1, transition: { duration: 0.7, ease: "circIn" } }}
        style={{ originX: isPresent ? 0 : 1 }}
        className={css.privacyScreen}
      />
    </div>
  )
}

const SkillList = ({ groups, skillsFilter, total, shown }) => (
  <div className={css.list}>
    <p className={css.status} aria-live="polite">
      {skillsFilter ? `${shown} of ${total} skills` : `${total} skills`}
    </p>

    {groups.map(group => (
      <section key={group.section} className={css.group}>
        <h2 className={css.listTitle}>{group.section}</h2>
        <ul className={css.skillList}>
          {group.skills.map(skill => {
            const isActive = !skillsFilter || skill.tags.includes(skillsFilter);
            // Under a filter a matching skill takes the filter's colour; at rest it
            // keeps its own primary tag.
            const accent = isActive && skillsFilter ? skillsFilter : skill.tags[0];

            return (
              <li
                key={skill.title}
                className={`${css.skillWrapper} ${css[`cat_${accent}`]} ${isActive ? "" : css.muted}`}
                title={skill.tags.join(" · ")}
              >
                {skill.title}
              </li>
            );
          })}
        </ul>
      </section>
    ))}
  </div>
);

export default Skills;
