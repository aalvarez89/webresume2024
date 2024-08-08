// import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import css from '../Styles/Skills.module.scss'

const Skills = () => {

    const navigate = useNavigate();

    

    const handleNavigate = page => {
        navigate(`/${page}`)
    }
    
    return (
        <div className={css.skills}>

            <div className="subpage skillpage">
              <ul className="skillList">
                <li className="listTitle">languages</li>
                <li>javascript/node.js</li>
                <li>golang</li>
                <li>c++</li>
                <li>html</li>
                <li>css</li>
                <li className="faded">solidity</li>
                <li className="faded">webassembly</li>
              </ul>

              <ul>
                <li className="listTitle">libraries</li>
                <li>react</li>
                <li>router</li>
                <li>ajax</li>
                <li>express</li>
                <li>mongoose</li>
                <li>sequelize</li>
                <li>jquery</li>
                <li>zdog</li>
                <li>handlebars</li>
                <li>dotenv</li>
                <li>flask</li>
                <li>bcrypt</li>
                <li>gorilla</li>
              </ul>

              <ul>
                <li className="listTitle">tools</li>
                <li>linux/wsl/ubuntu</li>
                <li>terminal</li>
                <li>posix</li>
                <li>git</li>
                <li>nginx</li>
                <li>vscode</li>
                <li>svg</li>
                <li>uml</li>
                <li>json</li>
                <li>grep</li>
                <li>vim</li>
                <li>ffmpeg</li>
              </ul>

              <ul>
                <li className="listTitle">protocols</li>

                <li>http/s</li>
                <li>web3</li>
                <li>tcp/udp</li>
                <li>rtmp</li>
                <li>smtp</li>
                <li>webrtc</li>
                <li>ftp</li>
                <li>ssh</li>
              </ul>

              <ul>
                <li className="listTitle">databases</li>

                <li>postgresql</li>
                <li>mysql</li>
                <li>mongodb</li>
                <li>oracle</li>
              </ul>

              <ul>
                <li className="listTitle">cloud</li>

                <li>gcp</li>
                <li>azure</li>
                <li>firebase</li>
                <li>heroku</li>
              </ul>

              <ul>
                <li className="listTitle">design</li>

                <li>photoshop</li>
                <li>affinity</li>
                <li>aftereffects</li>
                <li>aseprite</li>
                <li>premiere</li>
                <li>finalcutpro</li>
                <li>protools</li>
                <li>ableton</li>
              </ul>

              <ul>
                <li className="listTitle">interests</li>

                <li>livestreaming</li>
                <li>blockchain</li>
                <li>game dev</li>
                <li>media codecs</li>
                <li>animation</li>
                <li>soccer</li>
              </ul>

              <ul>
                <li className="listTitle">roadmap</li>

                <li>next.js</li>
                <li>docker</li>
                <li>PWA</li>
                <li>graphics/animation</li>
                <li>sass</li>
                <li>axios/fetch api</li>
                <li>blockchain/crypto</li>
                <li>web3</li>
                <li>YDKJS</li>
                <li>event loop</li>
                <li>sync/async</li>
                <li>call stack</li>
                <li>multithreading</li>
                <li>super/constructor (in js)</li>
                <li>ESLint</li>
                <li>CORS</li>
                <li></li>
              </ul>

              <div onClick={() => handleNavigate("")} className="back_button">
                {" "}
                &rsaquo;{" "}
              </div>
            </div>
        

        </div>
    )
}

export default Skills;