import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import css from '../Styles/Landing.module.scss'

const Landing = props => {

    const navigate = useNavigate();

    // const {  } = props;
    const [currentTab, setCurrentTab] = useState("home");
    
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

                <div className={css.portfolioMenu} onClick={() => {}}>
                + SKILLS
                </div>

                <div className={css.portfolioMenu} onClick={() => {}}>
                + MISSIVE
                </div>

                <div className={css.portfolioMenu} onClick={() => {}}>
                + PORTFOLIO
                </div>

                <div className={css.portfolioMenu} onClick={() => {}}>
                + SOCIAL
                </div>

            </div>
        </div>
    );
}

export default Landing;