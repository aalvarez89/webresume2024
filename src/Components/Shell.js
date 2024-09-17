import { GlobalSiteContext, siteActionTypes } from '../Store/GlobalSiteContext';
import { useState, useEffect, useContext, useRef } from 'react';

import { useNavigate, useLocation, Link } from 'react-router-dom';

import { motion } from 'framer-motion';

import { RxHamburgerMenu } from 'react-icons/rx';
import css from '../Styles/Shell.module.scss'

import resumePdf from '../Assets/AndrewResume2024_sc.pdf'


const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 300, damping: 24 }
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
};


const Shell = () => {

    const { globalSiteState, globalSiteDispatch } = useContext(GlobalSiteContext);

    const location = useLocation();
    const { pathname } = location;
    
    const [currentTab, setCurrentTab] = useState('home');
    const [isOpen, setIsOpen] = useState(false);
    
    
    const navigate = useNavigate();
    const handleNavigate = (page, currentTab) => {
        if (currentTab === 'home') {

            globalSiteDispatch({ type: siteActionTypes.SET_OPENTITLE, payload: !globalSiteState.openTitle})

            } else {
                globalSiteDispatch({ type: siteActionTypes.SET_OPENTITLE, payload: false})
                navigate(`/${page}`)
        }
        setIsOpen(false)
    }

    const getCtaStyle = tab => {

        switch (tab) {
            case 'portfolio': return css.ctaRed;
            case 'social': return css.ctaOrn;
            case 'blog': return css.ctaBlu;
        
            default: return css.ctaGrn;
        }
    }

    useEffect(() => {
        setCurrentTab(pathname.slice(1) || 'home')
        
    }, [pathname, location])


    const dropdownRef = useRef();
    useEffect(() => {
        const handler = e => {
            if (!dropdownRef.current.contains(e.target)) {
                setIsOpen(false)
            }
        }
        document.addEventListener('mousedown', handler)
        return () => document.removeEventListener('mousedown', handler)
    }, [])

    useEffect(() => {
        if (currentTab !== 'home') {
            globalSiteDispatch({ type: siteActionTypes.SET_OPENTITLE, payload: false})
        }
    }, [currentTab, globalSiteDispatch])
    
    return (
        <>
            <div className={css.shell} >
                <div className={css.controlWrapper}>
                    <motion.nav
                        initial={false}
                        animate={isOpen ? 'open' : 'closed'}
                        className={css.menu}
                        ref={dropdownRef}
                        >
                        <motion.button
                            whileTap={{ scale: 0.97 }}
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <RxHamburgerMenu color={isOpen ? css.red : css.grn} size={20}/>
                        </motion.button>
                        <motion.ul
                            variants={{
                            open: {
                                clipPath: 'inset(0% 0% 0% 0% round 10px)',
                                transition: {
                                type: 'spring',
                                bounce: 0,
                                duration: 0.7,
                                delayChildren: 0.3,
                                staggerChildren: 0.05
                                }
                            },
                            closed: {
                                clipPath: 'inset(10% 50% 90% 50% round 10px)',
                                transition: {
                                type: 'spring',
                                bounce: 0,
                                duration: 0.3
                                }
                            }
                            }}
                            style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
                        >
                            <motion.li variants={itemVariants} onClick={() => handleNavigate('bio')}>Hello</motion.li>
                            <motion.li variants={itemVariants} onClick={() => handleNavigate('portfolio')}>Portfolio</motion.li>
                            {/* <motion.li variants={itemVariants} onClick={() => handleNavigate('skills')}>Skills</motion.li> */}
                            <motion.li variants={itemVariants} onClick={() => handleNavigate('social')}>Contact</motion.li>
                            <motion.li variants={itemVariants} onClick={() => handleNavigate('blog')}>Missive</motion.li>
                        </motion.ul>
                    </motion.nav>
                
                    <div className={`${css.main} ${ !globalSiteState.openTitle ? css.openTitle : ''}`} onClick={() => handleNavigate('', currentTab) }><span className={`${css.brackets} ${ !globalSiteState.openTitle ? css.neutral : ''}`}>&#123;</span>&nbsp; I'M ANDREW &nbsp;<span className={`${css.brackets} ${ !globalSiteState.openTitle ? css.neutral : ''}`}>&#125;</span></div>
                </div>

                
                
                
                <div className={`${css.resume} ${getCtaStyle(currentTab)}`}>
                    <Link to={resumePdf} target='_blank' download>RESUME</Link>
                </div>
                
            </div>
        </>
    )
}

export default Shell;