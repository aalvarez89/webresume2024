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
                    <div onClick={() => handleNavigate("")}>I'M ANDREW </div>
                    
                </div>

            }
        </>
    )
}

export default Shell;