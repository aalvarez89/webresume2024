import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useIsPresent } from "framer-motion";

import profileFull from "../Assets/profile-andrew.jpg"

import { GoArrowUpRight } from "react-icons/go";

import css from '../Styles/Bio.module.scss'

const Bio = () => {
  
  const isPresent = useIsPresent();
  
  const [introText, setIntroText] = useState("I'M")
  
  const navigate = useNavigate();
  const handleNavigate = page => {
    navigate(`/${page}`)
  }
    
  return (
    <div className={css.bio}>
      <div className={css.bioHero}>
        <div className={css.topSection}>
          <img
            className={css.pfpTop}
            src={profileFull}
            alt="profile-andrew"
          />
          <p className={css.topIntro}>HELLO <br/> WORLD</p>
        </div>

        <div className={css.midSection}>
          <div className={css.midDetails}>
            <div>ORIGIN - CARACAS, VZ</div>
            <div>BASED - TORONTO, CA</div>
          </div>

          <div className={css.midDetails}>
            <div>CODING SINCE 2017</div>
          </div>
        </div>

        <div className={css.botSection}>

          <p className={css.botIntro} onClick={() => setIntroText("SOY")}> <span className={css.selfText}>{introText}</span> ANDREW</p>
        </div>

        <div className={css.bioDescription}>
          <div className={css.bioTitle}>Hello World, <br/>I'm Andrew</div>
          <motion.p
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              amount:"all",
            }}
          >I'm a <span className={css.accent}>full-stack</span> developer with hands-on experience and a passion for new
            technologies, I have a keen interest in financial technologies, payment
            systems, and business development
          </motion.p>
          <motion.p
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              amount:"all",
            }}>My expertise includes <span className={css.accent}>web technologies</span>, <span className={css.accent}>UI/UX</span>, and <span className={css.accent}>art direction</span>, allowing me to create engaging and efficient user
            interfaces
          </motion.p>
          <motion.p
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              amount:"all",
            }}>I thrive on the intersection of <span className={css.accent}>technology and business</span>, aiming
          to drive growth and innovation
          </motion.p>
        </div>

        <div className={css.bioCTA}>
          <motion.p
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              amount:"all",
            }}
            onClick={() => handleNavigate("social")}>Let's talk <span className={css.spacer}>
            <GoArrowUpRight size={36} /></span>
          </motion.p>
        </div>
      </div>

      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 0.7, ease: "circOut" } }}
        exit={{ scaleX: 1, transition: { duration: 0.7, ease: "circIn" } }}
        style={{ originX: isPresent ? 0 : 1 }}
        className={css.privacyScreen}
      />
    </div>
  );
}

export default Bio;


/* 
  <p>UI Designer</p>
  <p>Media Developer</p>
  <p>Founder</p>
  <p>System Architect</p>
  <p>
    I do software development and a digital design. I like to
    build interfaces and enrich them with media.{" "}
  </p>
</div> */