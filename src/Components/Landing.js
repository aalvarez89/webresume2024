import { useNavigate } from "react-router-dom";
import { motion, useIsPresent } from "framer-motion";

// import heroVideo from "../Assets/15439973-uhd_3840_2160_30fps.mp4"
import heroVideo from "../Assets/heroLanding2.mp4"

import css from '../Styles/Landing.module.scss'

const Landing = () => {

    const isPresent = useIsPresent();

    const navigate = useNavigate();

    const handleNavigate = page => {
        navigate(`/${page}`)
    }
    
    return (
        <div className={css.landing}>
            
            <video autoPlay muted loop src={heroVideo} type="video/mp4" className={css.heroVideo}>
                Your browser does not support the video tag.
            </video>
            
            <div className={css.menuContainer}>

                <div className={css.title}>
                    KWEIZAR
                </div>

                <div className={css.menu}>
                    <div className={css.portfolioMenu} onClick={() => handleNavigate("bio")}>
                    + HELLO
                    </div>

                    {/* <div className={css.portfolioMenu} onClick={() => handleNavigate("skills")}>
                    + SKILLS
                    </div>

                    <div className={css.portfolioMenu} onClick={() => handleNavigate("blog")}>
                    + MISSIVE
                    </div> */}

                    <div className={css.portfolioMenu} onClick={() => handleNavigate("portfolio")}>
                    + PORTFOLIO
                    </div>

                    <div className={css.portfolioMenu} onClick={() => handleNavigate("social")}>
                    + SOCIAL
                    </div>
                </div>

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