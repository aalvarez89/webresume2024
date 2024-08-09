import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import heroVideo from "../Assets/15439973-uhd_3840_2160_30fps.mp4"

import css from '../Styles/Landing.module.scss'

const Landing = () => {

    const navigate = useNavigate();
    
    const [currentTab, setCurrentTab] = useState("home"); // current tab logic -> move to Shell component
    /* <div className={`${currentTab === "bio" ? css.active : ""} ${css.portfolioMenu}`} onClick={() => handleNavigate("bio")}>
                    + HELLO
                    </div> */
    
    const location = useLocation();
    const { pathname } = location;

    const handleNavigate = page => {
        navigate(`/${page}`)
    }

    useEffect(() => {
        setCurrentTab(pathname.slice(1) || "home")
    }, [pathname, location])
    
    return (
        <motion.div 
            className={css.landing}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            >
            
            <video autoPlay muted loop src={heroVideo} type="video/mp4" className={css.heroVideo}>
                {/* <source src={"../Assets/15439973-uhd_3840_2160_30fps.mp4"} type="video/mp4" /> */}
                {/* <source  />
                Your browser does not support the video tag. */}
            </video>
            
            <div className={css.menuContainer}>

                <div className={css.title}>
                    I AM ANDREW
                </div>

                <div className={css.menu}>
                    <div className={css.portfolioMenu} onClick={() => handleNavigate("bio")}>
                    + HELLO
                    </div>

                    <div className={css.portfolioMenu} onClick={() => handleNavigate("skills")}>
                    + SKILLS
                    </div>

                    <div className={css.portfolioMenu} onClick={() => handleNavigate("blog")}>
                    + MISSIVE
                    </div>

                    <div className={css.portfolioMenu} onClick={() => handleNavigate("portfolio")}>
                    + PORTFOLIO
                    </div>

                    <div className={css.portfolioMenu} onClick={() => handleNavigate("social")}>
                    + SOCIAL
                    </div>
                </div>

            </div>
        </motion.div>
    );
}

export default Landing;