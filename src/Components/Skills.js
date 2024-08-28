import { useState } from "react";
// import { useNavigate } from "react-router-dom";

import css from '../Styles/Skills.module.scss'

const Skills = () => {

    // const navigate = useNavigate();

    const [showCore, setShowCore] = useState(false);
    // const [showFullStack, setShowFullStack] = useState(false);
    const [showFrontend, setShowFrontend] = useState(false);
    

    // const handleNavigate = page => {
    //     navigate(`/${page}`)
    // }
    
    return (
        <div className={css.skills}>


          <div className={css.layer} onClick={() => setShowCore(!showCore)}>
            Core Technologies
          </div>
          <div className={css.layer} onClick={() => setShowFrontend(!showFrontend)}>
            Frontend Technologies
          </div>

          {/* <div>
            Fullstack Developer
          </div> */}
            {
              showCore ? 
            
            <div className={css.skillContainer}>

              <div className={css.listTitle}>languages</div>
              <ul className={css.skillList}>
                <li>JS | Node</li>
                <li>TypeScript</li>
                <li>solidity</li>
                <li>c++</li>
                <li>sql</li>
                
              </ul>

              <div className={css.listTitle}>OS</div>
              <ul className={css.skillList}>
                <li>windows</li>
                  <li>wsl</li>
                <li>unix</li>
                <li>terminal</li>
                  <li>bash</li>
                  <li>powershell</li>
                
                
              </ul>
              <div className={css.listTitle}>Operations</div>
              <ul className={css.skillList}>
                <li>git / github</li>
                
                
              </ul>

              <div className={css.listTitle}>frontend</div>
              <div className={css.listTitle}>technologies</div>
              <ul className={css.skillList}>
                <li>html</li>
                  <li>svg</li>
                  <li>accessibility</li>
                <li>css</li>
                  <li>css grid</li>
                  <li>flexbox</li>
                  <li>media queries/responsive UI</li>
                
                
              </ul>
              <div className={css.listTitle}>libraries</div>
              <ul className={css.skillList}>
                <li>react</li>
                  <li>redux</li>
                  <li>router</li>
                <li>jquery</li>

                <li>electron</li>
                
                <li>ajax</li>

                
                
                
                <li>Web Payment API</li>
                <li>Jest</li>
                <li>handlebars</li>
                </ul>

              <div className={css.listTitle}>design</div>
              <div className={css.listTitle}>technologies</div>
              <ul className={css.skillList}>
                <li>sass</li>
              <li>Web Animation API</li>
                
                
              </ul>
              <div className={css.listTitle}>libraries</div>
              <ul className={css.skillList}>
              <li>Framer Motion</li>
                <li>MaterialUI</li>
                <li>Bootstrap</li>
                <li>KendoJS</li>
                {/* <li>zdog</li> */}
              </ul>
              <div className={css.listTitle}>software</div>
              <ul className={css.skillList}>
                <li>photoshop</li>
                <li>affinity designer</li>
                <li>aseprite</li>
              </ul>

              <div className={css.listTitle}>backend</div>
              <div className={css.listTitle}>technologies</div>
              <ul className={css.skillList}>
                <li>web server</li>
                  <li>http/s</li>
                    <li>RESTful API</li>
                <li>modules & packages</li>
                 <li>dotenv</li>
                <li>Built-in Libraries</li>
                <li>Events</li>
                <li>Streams</li>
                  <li>protocols</li>
                    <li>tcp/udp</li>
                    <li>rtmp</li>
                    <li>webRTC</li>

                    <li>smtp</li>

                    <li>ftp</li>

                    <li>ssh</li>

                    <li>web3</li>
                <li>json</li>
                

              </ul>

              <div className={css.listTitle}>libraries</div>
              <ul className={css.skillList}>
                <li>express</li>
                <li>nginx</li>
                {/* <li>mongoose</li> */}
                {/* <li>sequelize</li> */}
                <li>flask</li>
                <li>bcrypt</li>
                <li>Web Sockets</li>
                {/* <li>bcrypt</li> */}
              </ul>

              <div className={css.listTitle}>cloud</div>
              <div className={css.listTitle}>technologies</div>
              <ul className={css.skillList}>

                  <li>aws</li>
                  <li>gcp</li>
                  <li>azure</li>
                  <li>firebase</li>
                  <li>heroku</li>
                </ul>

              <div className={css.listTitle}>database</div>

              <div className={css.listTitle}>orm</div>
              
              <ul className={css.skillList}>
              
                <li>sequelize</li>
                </ul>

              <ul className={css.skillList}>libraries

                <li>mongoose</li>
                </ul>

              <ul className={css.skillList}>

                <li>postgresql</li>
                <li>mysql</li>
                <li>mongodb</li>
                <li>firestore</li>
                <li>oracle</li>
                </ul>

                


              

              
            </div>
            
            :
            null
            }
        

        </div>
    )
}

// const Skill = props => {

//   const {title, tags, skillCss } = props;

//   const titleRef = useRef(null)


//   return (
      
//       <div className={`${css.skillWrapper} ${skillCss}`} title={`${tags.map(t => `#${t} `)}`}> 
//         <div>{title}</div>
          
//       </div>
//   )
// }

export default Skills;




/*
<li>golang</li>

<li className="faded">webassembly</li>
 Serverless Function

                Lambda Functions


*/