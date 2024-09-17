import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion, useIsPresent } from "framer-motion";
import { GlobalSiteContext, siteActionTypes } from "../Store/GlobalSiteContext";
import heroVideo from "../Assets/heroLanding2.mp4"

import css from '../Styles/Landing.module.scss'

const Landing = () => {

    const { globalSiteState, globalSiteDispatch } = useContext(GlobalSiteContext);
    const isPresent = useIsPresent();

    const navigate = useNavigate();
    const handleNavigate = page => {
        navigate(`/${page}`)
    }
    
    return (
        <div className={css.landing}>
            
            <video autoPlay muted loop playsInline src={heroVideo} type="video/mp4" className={css.heroVideo}>
                Your browser does not support the video tag.
            </video>
            
                <div className={css.menuContainer}>
                    <AnimatePresence mode="wait">

                        {globalSiteState.openTitle &&
                            <motion.div className={css.wrapper}
                                    onClick={() => 
                                        globalSiteDispatch({ type: siteActionTypes.SET_OPENTITLE, payload: false})
                                    }
                                    
                                    initial={{
                                        opacity: 0,
                                        translateY: '-100px',
                                        scale: 0,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        translateY: '0px',
                                        scale: 1,
                                    }}
                                    exit={{
                                        opacity: 0,
                                        scale: 0,
                                    }}

                                    transition={{
                                        duration: 0.7,
                                        type: 'spring',
                                    }}
                                    >
                                <p></p>
                                <p>w</p>
                                <p>e</p>
                                <p>i</p>
                                <p>z</p>
                                <p>a</p>
                                <p></p>
                        </motion.div>}
                    </AnimatePresence>  
                        
                    {
                        !globalSiteState.openTitle && 
                            <motion.div className={css.menu} 
                                initial={{
                                    opacity: 0,
                                }}
                                animate={{
                                    opacity: [0, 0, 1],
                                    display: ['none', 'none', 'flex']
                                }}

                                transition={{
                                    duration: 1,
                                    times: [0, 0.5, 1]
                                }}>

                                <div className={css.portfolioMenu} onClick={() => handleNavigate("bio")}>
                                HELLO
                                </div>

                                <div className={css.portfolioMenu} onClick={() => handleNavigate("portfolio")}>
                                PORTFOLIO
                                </div>

                                {/* <div className={css.portfolioMenu} onClick={() => handleNavigate("skills")}>
                                SKILLS
                                </div> */}

                                <div className={css.portfolioMenu} onClick={() => handleNavigate("social")}>
                                CONTACT
                                </div>
                                
                                <div className={css.portfolioMenu} onClick={() => handleNavigate("blog")}>
                                MISSIVE
                                </div>
                            </motion.div>
                    }

                
                </div>

            <motion.div
                initial={{ scaleX: 1 }}
                animate={{ scaleX: 0, transition: { duration: 0.5, ease: "circOut" } }}
                exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
                style={{ originX: isPresent ? 0 : 1 }}
                className={css.privacyScreen}
            />
        </div>
    );
}

export default Landing;