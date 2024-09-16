import { useState, useRef } from "react"

import { motion, useIsPresent } from "framer-motion"

import pegasusHero from "../Assets/pegasusHeroFinallow.mp4"
import nuvoolaHero from "../Assets/nuvoolaHeroFinallow.mp4"
import coteacherHero from "../Assets/coteacherHeroFinallow.mp4"
import eonHero from "../Assets/eonHeroFinal.mp4"
import crankyHero from "../Assets/crankyHero2.mp4"
import ludumHero from "../Assets/ludumHero.gif"

import css from '../Styles/Portfolio.module.scss'

import { BiUpArrow } from "react-icons/bi"


const Portfolio = () => {
    const isPresent = useIsPresent();

    const [currentProject, setCurrentProject] = useState("")

    const projects = [
        {
        title: 'PEGASUS AI',
        banner: pegasusHero,
        role: "Fullstack Developer & System Architect",
        duration: "Oct 2023 - Jul 2024",
        tag: "pga",
        videoCss: css.videoPga,
        description: "Pegasus AI is a Software Startup based in Toronto with the original mission of unifying the gaps of niche markets by providing a platform that support these commerce ecosystems.",
        achievements: ["Cofounded, Architected, and developed an CRM/ERP enterprise software with eCommerce integration Startup Business - PERN stack",
                "Implemented Payment Processing System & Payment Gateway for cryptocurrency transactions, integrating to Web3, and augmenting profitability on the business model",
                "Developed a comprehensive scheduling system with robust backend support and a fully functional UI (leveraging react-big-calendar)",
                "Built a Design System Library to optimize front-end implementation and collaboration with design team",
                "Led a team of 5 (development, graphic design, AI) and coordinated integration of their corresponding platforms (Core Applications, AWS, Starburst, Figma)",
                "Oversaw project financial planning, executive summaries, P&L statements, and capital investment outreach"
                ]
        },
        {
            title: 'NUVOOLA AI',
            banner: nuvoolaHero,
            role: "Fullstack Developer",
            duration: "Sep 2021 - Apr 2024",
            tag: "nuv",
            videoCss: css.videoNuv,
            description: "Nuvoola is a Canadian development consulting firm, one of the few federally authorized to use facial recognition technology. The company leverages this technology to deliver cutting-edge applications for key infrastructure industries.",
            achievements: ["Participated as the lead front-end developer in 3 proprietary projects for JRV, NB Southern Railway and Canadian Department of National Defence",
                    "Developed and integrated custom applications into a scheduling system for events logging and management, leveraging an AI-driven centralized system to optimize scheduling and enhance efficiency",
                    "Implemented and maintained several modules on the front-end and implemented data gathering features as well as interactive components to enhance user experience"
                ]
        },
        {
            title: 'COTEACHER',
            banner: coteacherHero,
            role: "Fullstack Developer",
            duration: "Feb 2021 - Sep 2021",
            tag: "cot",
            videoCss: css.videoCot,
            description: "Coteacher is a Canadian startup focused on creating a social network for teachers and educators, facilitating the exchange of high-quality resources to enhance the education system in North America.",
            achievements: ["Expanded the functionality of the application, presenting solutions tailored to the needs of the US educational system",
                "Building several UI components and expanding the Design System for the frontend successfully enhanced interactivity and improved user experience",
                "Designing and refactoring the back-end components optimized the architecture and database workflow, enabling the containerization of the platform and improving the deployment infrastructure on the cloud service",
                "Engaging with prospective clients to showcase the product's capabilities and features, while surveying potential users for feedback"
            ]
        },
        {
            title: 'EON MEDIA',
            banner: eonHero,
            role: "Golang Video Developer",
            duration: "Apr 2020 - May 2021",
            tag: "eon",
            videoCss: css.videoEon,
            description: "Eon Media is a Canadian AI-focused startup transforming media consumption by enhancing real-time capabilities and delivering real-time information from extracted metadata.",
            achievements: [
                "Developed a proprietary solution to improve current media standards and delivering Net-Zero Latency Adaptive Streaming",
                "Designed software for Dynamic Ad Insertion (DAI) adding SCTE-35 standard",
                "Leveraged third-party programs like NGINX, Ffmpeg, VNC for media support",
                "Designed and built a platform-agnostic solution with a backend server deployed on Google Cloud Platform and Amazon Web Services",
                "Built Frontend platform with Media Source Extensions for video players that supported HLS/DASH protocols and RTMP low latency streams"
                ]
        },
        {
        title: 'LUDUM DARE 49',
        banner: ludumHero,
        role: "Hackathon/Gamejam",
        duration: "Oct 2021",
        tag: "lud",
        videoCss: css.videoLud,
        description: "Larry’s Whacky Alchemy Lab is a passion project focused on learning about the gaming industry, created as part of the 49th Ludum Dare competition.",
        achievements: ["Participated on the Ludum Dare 49 Gamejam to build an action/puzzle game - Larry’s Whacky Alchemy Lab",
                "Collaborated on the design, development and art direction of the game",
                "Built assets and animations on Aseprite and developed the game using the GameMaker Studio 2 Engine"]
        },
        {
        title: 'CRANKY BUDGET',
        banner: crankyHero,
        role: "Personal Project - Fullstack",
        duration: "2020 - Current",
        tag: "crb",
        videoCss: css.videoLud,
        description: "Cranky Budget is a personal project aimed at developing a tool for managing monthly and yearly budgets.",
        achievements: ["Built a Budget management Serverless web application with Salary calculation featuresusing Firestore NoSQL DB and React"]
        },
        
        // {
        // title: '',
        // banner: Hero,
        // role: "Fullstack Developer & System Architect",
        // duration: "",
        // tag: "xxx",
        // videoCss: css.video,
        // description: "",
        // achievements: [""]
        // }
]
    
    return (
        <div className={css.portfolio}>

        <div className={css.projectsContainer}>
            {projects.map(p => <Project  title={p.title} 
                                            description={p.description}
                                            source={p.banner} 
                                            role={p.role} 
                                            duration={p.duration} 
                                            tag={p.tag} 
                                            videoCss={p.videoCss} 
                                            currentProject={currentProject} setCurrentProject={setCurrentProject}
                                            achievements={p.achievements}
                                            >
                                    
                                </Project>)
            }

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

    const {title, description, source, role, duration, tag, videoCss, achievements, currentProject, setCurrentProject} = props;

    const [toggleAchievements, setToggleAchievements] = useState(false)

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
                <div className={css.title} onClick={() => {setCurrentProject(tag); executeScroll(); setToggleAchievements(false)}} >{title}</div>    
                {
                    currentProject === tag  ? 
                    <>
                        <div className={css.jobInfo}>
                            {role} <span className={css.jobDivider}>|</span> {duration}
                        </div>
                        {   
                            toggleAchievements ?
                            <ul>
                                {achievements.map(g => <li>{g}</li>)}
                            </ul>
                            :
                            <>
                                <p className={css.description}>{description}</p>
                                <div className={css.toggleAchievements} onClick={() => setToggleAchievements(true)}>Achievements</div>
                            </>
                        }
                        <div>{props.children}</div>
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