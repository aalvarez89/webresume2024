// import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import css from '../Styles/Bio.module.scss'

const Bio = () => {

    const navigate = useNavigate();

    

    const handleNavigate = page => {
        navigate(`/${page}`)
    }
    
    return (
        <div className={css.bio}>
            <div className="subpage bio_page">
              <div className="bio_picture">
                <img
                  className="bio_img"
                  src="https://i.ibb.co/ZW4bnFq/profile-andrew.jpg"
                  alt="profile-andrew"
                />
              </div>
              <div className="bio-description">
                <p className="bio-title">Hi, I'm Andrew</p>
                <p>UI Designer</p>
                <p>Media Developer</p>
                <p>Founder</p>
                <p>System Architect</p>
                <p>Metalhead</p>
                <p>
                  I do software development and a digital design. I like to
                  build interfaces and enrich them with media.{" "}
                </p>
                <div className="bio-geo">Origin: CCS-VZLA Based: TOR-CAN</div>
              </div>
              <div onClick={() => handleNavigate("")} className="back_button">
                {" "}
                &rsaquo;{" "}
              </div>
            </div>

            {/* <div onClick={() => handleNavigate('home')}>back</div> */}
        </div>
    );
}

export default Bio;