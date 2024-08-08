import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import css from '../Styles/Landing.module.scss'

const Landing = () => {

    const navigate = useNavigate();
    
    const [currentTab, setCurrentTab] = useState("home"); // current tab logic -> move to Shell component
    
    const location = useLocation();
    const { pathname } = location;

    const handleNavigate = page => {
        navigate(`/${page}`)
    }

    useEffect(() => {
        setCurrentTab(pathname.slice(1) || "home")
    }, [pathname, location])
    
    return (
        <div className={css.landing}>
            <div className={css.title} onClick={() => {}}>
                I AM ANDREW
            </div>

            <div className={css.menu}>

                <div className={`${currentTab === "bio" ? css.active : ""} ${css.portfolioMenu}`} onClick={() => handleNavigate("bio")}>
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
    );
}

export default Landing;