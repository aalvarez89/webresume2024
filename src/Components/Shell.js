import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

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
            {
                // pathname === "/" ? 
                // null :
                <div className={css.shell} onClick={() => console.log(currentTab)}>
                    <div className={css.main} onClick={() => handleNavigate("")}>&#123; I'M ANDREW &#125;</div>
                    
                </div>

            }
        </>
    )
}

export default Shell;