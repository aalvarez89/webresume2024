import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

import resumePdf from '../Assets/AndrewResume2024_ln.pdf'
import css from '../Styles/Shell.module.scss'

const Shell = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const { pathname } = location;

    const [ currentTab, setCurrentTab ] = useState("home");

    const handleNavigate = page => {
        navigate(`/${page}`)
    }

    const getCtaStyle = tab => {

        switch (tab) {
            // case "home": return css.ctaGrn;
            case "portfolio": return css.ctaRed;
            case "social": return css.ctaOrn;
        
            default: return css.ctaGrn;
        }
    }

    useEffect(() => {
        setCurrentTab(pathname.slice(1) || "home")
        
    }, [pathname, location])
    
    return (
        <>
            <div className={css.shell} >
            {/* // onClick={() => console.log(currentTab)}> */}

                <div className={css.main} onClick={() => handleNavigate("")}><span className={css.brackets}>&#123;</span>&nbsp; I'M ANDREW &nbsp;<span className={css.brackets}>&#125;</span></div>
                <div className={`${css.resume} ${getCtaStyle(currentTab)}`}>
                    <Link to={resumePdf} target="_blank" download>RESUME</Link>
                </div>
                
            </div>
        </>
    )
}

export default Shell;