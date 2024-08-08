// import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import css from '../Styles/Portfolio.module.scss'

const Portfolio = () => {

    const navigate = useNavigate();

    

    const handleNavigate = page => {
        navigate(`/${page}`)
    }
    
    return (
        <div className={css.portfolio}>

        pegasus ai
        nuvoola
        coteacher
        eonmedia

        <div onClick={() => handleNavigate("")} className="back_button">
            {" "}
            &rsaquo;{" "}
        </div>
        </div>
    )
}

export default Portfolio;