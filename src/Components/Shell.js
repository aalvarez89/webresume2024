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

    useEffect(() => {
        setCurrentTab(pathname.slice(1) || "home")
        
    }, [pathname, location])
    
    return (
        <>
            
            <div className={css.shell} onClick={() => console.log(currentTab)}>
                <div className={css.main} onClick={() => handleNavigate("")}>&#123; I'M ANDREW &#125;</div>
                <div className={css.resume}>
                    <Link to={resumePdf} target="_blank" download>My Resume</Link>
                </div>
                
            </div>


            
        </>
    )
}

export default Shell;