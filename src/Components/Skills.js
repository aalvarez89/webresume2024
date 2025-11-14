import { useEffect, useState } from "react";

import css from "../Styles/Skills.module.scss"

const Skills = () => {

  const [skillsFilter, setSkillsFilter] = useState("")

  const handleFilter = active => {
    setSkillsFilter(active === skillsFilter ? "" : active)
  }
  return (
    <div className={css.skills}>

      <div className={css.categoryWrapper}>
        <div className={`${css.category} ${skillsFilter === 'Core' ? css.title_Core: ''}`} onClick={() => handleFilter("Core")}>
          Core
        </div>
        <div className={`${css.category} ${skillsFilter === 'Frontend' ? css.title_Frontend: ''}`} onClick={() => handleFilter("Frontend")}>
          Frontend
        </div>
        <div className={`${css.category} ${skillsFilter === 'Backend' ? css.title_Backend: ''}`} onClick={() => handleFilter("Backend")}>
          Backend
        </div>
        <div className={`${css.category} ${skillsFilter === 'Devops' ? css.title_Devops: ''}`} onClick={() => handleFilter("Devops")}>
          Devops & Architecture
        </div>
        <div className={`${css.category} ${skillsFilter === 'Database' ? css.title_Database: ''}`} onClick={() => handleFilter("Database")}>
          DBM
        </div>
        <div className={`${css.category} ${skillsFilter === 'Design' ? css.title_Design: ''}`} onClick={() => handleFilter("Design")}>
          Design
        </div>

      </div>
          
        
      <div className={css.skillContainer}>
        <div className={css.listTitle}>Languages</div>
        <Skill title={"JavaScript"}   tags={["Core", "Frontend"]}               skillsFilter={skillsFilter} />
        <Skill title={"Node"}         tags={["Core", "Backend"]}                skillsFilter={skillsFilter} />
        <Skill title={"TypeScript"}   tags={["Core", "Frontend"]}               skillsFilter={skillsFilter} />
        <Skill title={"Solidity"}     tags={["Core", "Blockchain"]}             skillsFilter={skillsFilter} />
        <Skill title={"C++"}          tags={["Core"]}                           skillsFilter={skillsFilter} />
        <Skill title={"Python"}       tags={["Backend"]}                        skillsFilter={skillsFilter} />
        <Skill title={"SQL"}          tags={["Core", "Backend", "Database"]}    skillsFilter={skillsFilter} />

        <div className={css.listTitle}>OS</div>
        <Skill title={"Windows"}    tags={["Core"]}               skillsFilter={skillsFilter} />
        <Skill title={"WSL"}        tags={["Core", "Devops"]}     skillsFilter={skillsFilter} />
        <Skill title={"Unix"}       tags={["Core"]}               skillsFilter={skillsFilter} />
        <Skill title={"Terminal"}   tags={["Core", "Backend"]}    skillsFilter={skillsFilter} />

        <div className={css.listTitle}>Operations</div>
        <Skill title={"Git"}      tags={["Core"]}              skillsFilter={skillsFilter} />
        <Skill title={"Github"}   tags={["Core"]}              skillsFilter={skillsFilter} />
        <Skill title={"Agile"}    tags={["Core", "Devops"]}    skillsFilter={skillsFilter} />
        <Skill title={"Scrum"}    tags={["Core", "Devops"]}    skillsFilter={skillsFilter} />
        <Skill title={"Kanban"}   tags={["Devops"]}            skillsFilter={skillsFilter} />
        <Skill title={"Jira"}     tags={["Core", "Devops"]}    skillsFilter={skillsFilter} />
        <Skill title={"CI/CD"}    tags={["Devops"]}            skillsFilter={skillsFilter} />

        <div className={css.listTitle}>Libraries</div>
        <Skill title={"React"}                tags={["Frontend"]}               skillsFilter={skillsFilter} />
        <Skill title={"Redux"}                tags={["Frontend"]}               skillsFilter={skillsFilter} />
        <Skill title={"Router"}               tags={["Frontend"]}               skillsFilter={skillsFilter} />
        <Skill title={"Jest"}                 tags={["Frontend"]}               skillsFilter={skillsFilter} />
        <Skill title={"PyTest"}               tags={["Frontend", "Backend"]}    skillsFilter={skillsFilter} />
        <Skill title={"jQuery"}               tags={["Frontend"]}               skillsFilter={skillsFilter} />
        <Skill title={"Electron"}             tags={["Frontend"]}               skillsFilter={skillsFilter} />
        <Skill title={"Handlebars"}           tags={["Frontend"]}               skillsFilter={skillsFilter} />
        <Skill title={"Ajax"}                 tags={["Frontend", "Backend"]}    skillsFilter={skillsFilter} />
        <Skill title={"Web Payment API"}      tags={["Frontend", "Backend"]}    skillsFilter={skillsFilter} />
        <Skill title={"Bitcoin Payment API"}  tags={["Backend", "Blockchain"]}  skillsFilter={skillsFilter} />
        <Skill title={"Express"}              tags={["Backend"]}                skillsFilter={skillsFilter} />
        <Skill title={"Django"}               tags={["Backend"]}                skillsFilter={skillsFilter} />
        <Skill title={"NGINX"}                tags={["Backend"]}                skillsFilter={skillsFilter} />
        <Skill title={"bcrypt"}               tags={["Frontend", "Backend", "Blockchain"]}  skillsFilter={skillsFilter} />
        <Skill title={"Web Sockets"}          tags={["Frontend", "Backend"]}   skillsFilter={skillsFilter} />
        <Skill title={"Framer Motion"}        tags={["Frontend", "Design"]}    skillsFilter={skillsFilter} />
        <Skill title={"React Flow"}           tags={["Frontend", "Design"]}    skillsFilter={skillsFilter} />
        <Skill title={"MaterialUI"}           tags={["Frontend", "Design"]}    skillsFilter={skillsFilter} />
        <Skill title={"Bootstrap"}            tags={["Frontend", "Design"]}    skillsFilter={skillsFilter} />
        <Skill title={"KendoJS"}              tags={["Frontend", "Design"]}    skillsFilter={skillsFilter} />
        <Skill title={"Sequelize"}            tags={["Backend", "Database"]}   skillsFilter={skillsFilter} />
        <Skill title={"Mongoose"}             tags={["Backend", "Database"]}   skillsFilter={skillsFilter} />

        <div className={css.listTitle}>Technologies</div>
        <Skill title={"HTML"}                 tags={["Frontend"]}              skillsFilter={skillsFilter} />
        <Skill title={"CSS"}                  tags={["Frontend", "Design"]}    skillsFilter={skillsFilter} />
        <Skill title={"SVG"}                  tags={["Frontend", "Design"]}    skillsFilter={skillsFilter} />
        <Skill title={"CSS Grid"}             tags={["Frontend", "Design"]}    skillsFilter={skillsFilter} />
        <Skill title={"FlexBox"}              tags={["Frontend", "Design"]}    skillsFilter={skillsFilter} />
        <Skill title={"Media Queries"}        tags={["Frontend", "Design"]}    skillsFilter={skillsFilter} />
        <Skill title={"SASS"}                 tags={["Frontend"]}              skillsFilter={skillsFilter} />
        <Skill title={"LESS"}                 tags={["Frontend"]}              skillsFilter={skillsFilter} />
        <Skill title={"Web Animation API"}    tags={["Frontend", "Design"]}    skillsFilter={skillsFilter} />
        <Skill title={"Web Server"}           tags={["Backend"]}               skillsFilter={skillsFilter} />
        <Skill title={"HTTP/HTTPS"}           tags={["Backend"]}               skillsFilter={skillsFilter} />
        <Skill title={"RESTful API"}          tags={["Backend"]}               skillsFilter={skillsFilter} />
        <Skill title={"Niagara"}              tags={["Backend"]}               skillsFilter={skillsFilter} />
        <Skill title={"Modules & Packages"}   tags={["Backend"]}               skillsFilter={skillsFilter} />
        <Skill title={"dotenv"}               tags={["Backend"]}               skillsFilter={skillsFilter} />
        <Skill title={"Events"}               tags={["Backend"]}               skillsFilter={skillsFilter} />
        <Skill title={"JSON"}                 tags={["Backend", "Frontend"]}   skillsFilter={skillsFilter} />
        <Skill title={"Streams"}              tags={["Backend"]}               skillsFilter={skillsFilter} />
        <Skill title={"Protocols"}            tags={["Backend"]}               skillsFilter={skillsFilter} />
        <Skill title={"TCP/UDP"}              tags={["Backend", "Media"]}      skillsFilter={skillsFilter} />
        <Skill title={"rtmp"}                 tags={["Backend", "Media"]}      skillsFilter={skillsFilter} />
        <Skill title={"WebRTC"}               tags={["Backend", "Media"]}      skillsFilter={skillsFilter} />
        <Skill title={"smtp"}                 tags={["Backend"]}               skillsFilter={skillsFilter} />
        <Skill title={"ftp"}                  tags={["Backend"]}               skillsFilter={skillsFilter} />
        <Skill title={"ssh"}                  tags={["Backend"]}               skillsFilter={skillsFilter} />
        <Skill title={"Web3"}                 tags={["Frontend", "Backend", "Blockchain"]}  skillsFilter={skillsFilter} />
        <Skill title={"Bash"}                 tags={["Core", "Backend"]}      skillsFilter={skillsFilter} />
        <Skill title={"Powershell"}           tags={["Core", "Backend"]}      skillsFilter={skillsFilter} />
        <Skill title={"AWS"}                  tags={["Devops"]}               skillsFilter={skillsFilter} />
        <Skill title={"Firebase"}             tags={["Devops"]}               skillsFilter={skillsFilter} />
        <Skill title={"GCP"}                  tags={["Devops"]}               skillsFilter={skillsFilter} />
        <Skill title={"Azure"}                tags={["Devops"]}               skillsFilter={skillsFilter} />
        <Skill title={"Docker"}               tags={["Devops"]}               skillsFilter={skillsFilter} />
        <Skill title={"npm"}                  tags={["Devops"]}               skillsFilter={skillsFilter} />
        <Skill title={"PostgreSQL"}           tags={["Database"]}             skillsFilter={skillsFilter} />
        <Skill title={"Tiger Data"}           tags={["Database"]}             skillsFilter={skillsFilter} />
        <Skill title={"MySQL"}                tags={["Database"]}             skillsFilter={skillsFilter} />
        <Skill title={"Firestore"}            tags={["Database"]}             skillsFilter={skillsFilter} />
        <Skill title={"MongoDB"}              tags={["Database"]}             skillsFilter={skillsFilter} />
        <Skill title={"Oracle"}               tags={["Database"]}             skillsFilter={skillsFilter} />

        <div className={css.listTitle}>Software</div>
        <Skill title={"Adobe PS"}            tags={["Media"]}           skillsFilter={skillsFilter} />
        <Skill title={"Adobe AE"}            tags={["Media"]}           skillsFilter={skillsFilter} />
        <Skill title={"Affinity"}            tags={["Design"]}          skillsFilter={skillsFilter} />
        <Skill title={"Aseprite"}            tags={["Media"]}           skillsFilter={skillsFilter} />
        <Skill title={"Final Cut"}           tags={["Media"]}           skillsFilter={skillsFilter} />
        <Skill title={"Ableton Live"}        tags={["Media"]}           skillsFilter={skillsFilter} />
      </div>
    </div>
  )
}

const Skill = props => {
  
  const {title, tags, skillsFilter } = props;

  const [activeFilter, setActiveFilter] = useState("")
  
  useEffect(() => {
    setActiveFilter("")
    if (tags.includes(skillsFilter)) {
      setActiveFilter(skillsFilter)
    }
  }, [tags, skillsFilter, activeFilter])
  

  return (
    skillsFilter === "" || skillsFilter === activeFilter ?
    <div className={`${css.skillWrapper} ${ activeFilter ? css[`style_${activeFilter}`] : ""}`} title={`${tags.map(t => `#${t} `)}`}> 
      <div>{title}</div>
    </div>
    :
    null
  )
}

export default Skills;