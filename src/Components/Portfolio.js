import { useState, useRef } from "react"

import { motion, useIsPresent } from "framer-motion"

import pegasusHero from "../Assets/pegasusHero2.mp4"
import nuvoolaHero from "../Assets/nuvoolaHero2.mp4"
import coteacherHero from "../Assets/coteacherHero.mp4"
import eonHero from "../Assets/eonHero2.mp4"
import crankyHero from "../Assets/crankyHero2.mp4"
import ludumHero from "../Assets/ludumHero.gif"

import css from '../Styles/Portfolio.module.scss'

import { BiUpArrow } from "react-icons/bi"


const Portfolio = () => {
    const isPresent = useIsPresent();

    const [currentProject, setCurrentProject] = useState("")
    
    return (
        <div className={css.portfolio}>

        <div className={css.projectsContainer}>
           
            <Project    title={'PEGASUS AI'} 
                        source={pegasusHero} 
                        role={"Fullstack Developer & System Architect"} 
                        duration={"Oct 2023 - Jul 2024"} 
                        tag={"pga"} 
                        videoCss={css.videoPga}
                        currentProject={currentProject} setCurrentProject={setCurrentProject}
                        >
                <ul>
                    <li>
                    Architected and developed CRM/ERP enterprise software with e-Commerce
                    integration using PERN stack
                    </li>
                    <li>
                    Led a team of 5 for graphic design, AI, and development to integrate with
                    their corresponding platforms (Core Applications, AWS, Starburst, Figma)
                    </li>
                    <li>
                    Initiated development of a proprietary Payment Processing System and Gateway
                    supporting fiat and cryptocurrency to augment profitability on the business
                    model
                    </li>
                    <li>
                    Oversaw project financial planning, executive summaries, and P&L statements
                    for capital investment outreach
                    </li>
                    <li>
                    Built a Design System Library to optimize front-end implementation and
                    collaboration with the design team
                    </li>
                </ul>
            </Project>

            <Project    title={'NUVOOLA AI'} 
                        source={nuvoolaHero} 
                        role={"Fullstack Developer"} 
                        duration={"Sep 2021 - Apr 2024"} 
                        tag={"nuv"} 
                        videoCss={css.videoNuv}
                        currentProject={currentProject} setCurrentProject={setCurrentProject}
                        >
                <ul>
                    <li>
                    Integrated styling libraries to meet customer needs while implementing and
                    expanding the back-end API
                    </li>
                    <li>
                    Participated as the lead front-end developer in 3 proprietary projects for
                    JRV, NB Southern Railway and Canadian Department of National Defence

                    </li>
                    <li>
                    Implemented and maintained several modules on the front-end and implemented
                    data gathering features as well as interactive components to enhance user
                    experience

                    </li>
                    <li>
                    Maintained the frontend code and refactored it from Class-based to Functional-based paradigms
                    </li>
                </ul>
            </Project>

            <Project    title={'COTEACHER'} 
                        source={coteacherHero} 
                        role={"Fullstack Developer"} 
                        duration={"Feb 2021 - Sep 2021"} 
                        tag={"cot"} 
                        videoCss={css.videoCot}
                        currentProject={currentProject} setCurrentProject={setCurrentProject}
                        >
                <ul>
                    <li>
                    Expanded the functionality of the application, presenting solutions tailored
                    to the needs of the US educational system
                    </li>
                    <li>
                    Building several UI components and expanding the Design System for the
                    frontend successfully enhanced interactivity and improved user experience
                    </li>
                    <li>
                    Designing and refactoring the back-end components optimized the architecture
                    and database workflow, enabling the containerization of the platform and
                    improving the deployment infrastructure on the cloud service

                    </li>
                    <li>
                    Engaging with prospective clients to showcase the product's capabilities and
                    features, while surveying potential users for feedback
                    </li>
                </ul>
            </Project>

            <Project    title={'EON MEDIA'} 
                        source={eonHero} 
                        role={"Golang Video Developer"} 
                        duration={"Apr 2020 - May 2021"} 
                        tag={"eon"} 
                        videoCss={css.videoEon} 
                        currentProject={currentProject} setCurrentProject={setCurrentProject}>
                <ul>
                    <li>
                    Developed a proprietary solution to improve current media standards and
                    delivering Net-Zero Latency Adaptive Streaming
                    </li>
                    <li>
                    Designed software for Dynamic Ad Insertion (DAI) adding SCTE-35 standard
                    </li>
                    <li>
                    Leveraged third-party programs like NGINX, Ffmpeg, VNC for media support
                    </li>
                    <li>
                    Designed and built a platform-agnostic solution with a backend server deployed on
                    Google Cloud Platform and Amazon Web Services
                    </li>
                    <li>
                    Built Frontend platform with Media Source Extensions for video players that
                    supported HLS/DASH protocols and RTMP low latency streams
                    </li>
                </ul>
            </Project>

            <Project    title={'LUDUM DARE 49'} 
                        source={ludumHero} 
                        role={"Hackathon/Gamejam"} 
                        duration={"Oct 2021"} 
                        tag={"lud"} 
                        videoCss={css.videoLud} 
                        currentProject={currentProject} setCurrentProject={setCurrentProject}>
                <ul>
                    <li>
                    Participated on the Ludum Dare 49 Gamejam to build an action/puzzle game
                    called Larry’s Whacky Alchemy Lab
                    </li>
                    <li>
                    Collaborated on the design, development and art direction of the game.
                    </li>
                    <li>
                    Built assets and animations on Aseprite and developed the game using the GameMaker Studio 2 Engine
                    </li>                   


                </ul>
            </Project>

            <Project    title={'CRANKY BUDGET'} 
                        source={crankyHero} 
                        role={"Personal Project - Fullstack"} 
                        duration={"2020 - Current"} 
                        tag={"crb"} 
                        videoCss={css.videoLud} 
                        currentProject={currentProject} setCurrentProject={setCurrentProject}>
                <ul>
                    <li>
                    Built a Budget management Serverless web application with Salary calculation features
                    using Firestore NoSQL DB and React
                    </li>

                </ul>
            </Project>

        </div>
        
            <motion.div
                initial={{ scaleX: 1 }}
                animate={{ scaleX: 0, transition: { duration: 0.7, ease: "circOut" } }}
                exit={{ scaleX: 1, transition: { duration: 0.7, ease: "circIn" } }}
                style={{ originX: isPresent ? 0 : 1 }}
                className={css.privacyScreen}
            />
        </div>
    )
}

const Project = props => {

    const {title, source, role, duration, tag, videoCss, currentProject, setCurrentProject} = props;

    const titleRef = useRef(null)

   const executeScroll = () => titleRef ? titleRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' }) : window.scrollTo(0,0)

    return (
        <div className={css.projectWrapper} ref={titleRef}>
            <div className={`${css.project} ${currentProject === tag ? css.expanded : ''}`} >
                {currentProject === tag  ? 
                    <div className={css.vidContainer}>
                        {
                            tag !== 'lud' ?
                            <video autoPlay muted loop playsInline src={source} type="video/mp4" className={`${css.projectVideo} ${videoCss}`}>
                                Your browser does not support the video tag.
                            </video>
                            :
                            <img className={`${css.projectVideo} ${videoCss}`} src={source} alt='Project Hero Banner'></img>

                        }
                    </div> :
                    null
                }
                <div className={css.title} onClick={() => {setCurrentProject(tag); executeScroll()}} >{title}</div>    
                {
                    currentProject === tag  ? 
                    <>
                        <div className={css.jobInfo}>
                            {role} <span className={css.jobDivider}>|</span> {duration}
                        </div>
                        <div >{props.children}</div>
                    </>
                    
                    :
                    null
                }
            </div>

            {
                currentProject === tag  ? 
                <footer className={css.projectFooter} onClick={() => {setCurrentProject(""); executeScroll()}}> <BiUpArrow className={css.arrowUp}/> </footer>
                :
                null
            }

            
            
        </div>
    )
}

export default Portfolio;