import { useState } from "react";
import BlogPost from "./Components/blogPost";
import "./styles.css";

export default function App() {
  const [title, setTitle] = useState("portfolioTitle");
  const [menu, setMenu] = useState("Menu");
  const [selection, setSelection] = useState("");

  // const handleTransition = () => {
  //   setTitle("portfolioTitle portfolioTitleAnimation");
  // };

  const generateContent = (page) => {
    switch (page) {
      case "portfolio":
        return (
          <>
            <div className="subpage">
              Hi, I'm Andrew, a software developer and a digital designer. I
              like to build interfaces and enrich them with media. Origin:
              CCS-VZLA Based: TOR-CAN
              <div onClick={() => setMenu("Menu")} className="back_button">
                {" "}
                &rsaquo;{" "}
              </div>
            </div>
          </>
        );
      case "skills":
        return (
          <>
            <div className="subpage skillpage">
              {/* <p className="skillTitle">development</p> */}
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

              <div onClick={() => setMenu("Menu")} className="back_button">
                {" "}
                &rsaquo;{" "}
              </div>
            </div>
          </>
        );
      case "blog":
        return (
          <>
            <div className="subpage blog_page">
              <BlogPost />
              <div onClick={() => setMenu("Menu")} className="back_button">
                {" "}
                &rsaquo;{" "}
              </div>
            </div>
          </>
        );
      case "social":
        return (
          <>
            <div>
              <div>
                <img
                  className="github_logo"
                  alt="github logo"
                  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                />
              </div>
              <form>
                <input type="text"></input>
              </form>
              <div onClick={() => setMenu("Menu")} className="back_button">
                {" "}
                &rsaquo;{" "}
              </div>
            </div>
          </>
        );
      case "bio":
      default:
        return (
          <>
            <div className="subpage bio_page">
              <div className="bio_picture">
                <img
                  className="bio_img"
                  src="https://i.ibb.co/ZW4bnFq/profile-andrew.jpg"
                  alt="profile-andrew"
                />
              </div>
              <p className="bio-description">
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
              </p>
              <div onClick={() => setMenu("Menu")} className="back_button">
                {" "}
                &rsaquo;{" "}
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <div className="App">
      <div
        className={title}
        onClick={() => setTitle("portfolioTitle portfolioTitleAnimation")}
      >
        I AM ANDREW
      </div>
      <div className={menu}>
        <div
          className="portfolioMenu"
          onClick={() => {
            setSelection("bio");
            setMenu("Menu MenuAnimation");
          }}
        >
          + HELLO
        </div>
        <div
          className="portfolioMenu"
          onClick={() => {
            setSelection("skills");
            setMenu("Menu MenuAnimation");
          }}
        >
          + SKILLS
        </div>
        <div
          className="portfolioMenu"
          onClick={() => {
            setSelection("blog");
            setMenu("Menu MenuAnimation");
          }}
        >
          + MISSIVE
        </div>
        <div
          className="portfolioMenu"
          // onClick={() => {
          //   setSelection("portfolio");
          //   setMenu("Menu MenuAnimation");
          // }}
        >
          + PORTFOLIO
        </div>
        <div
          className="portfolioMenu"
          onClick={() => {
            setSelection("social");
            setMenu("Menu MenuAnimation");
          }}
        >
          + SOCIAL
        </div>
      </div>
      <div className="Content">{generateContent(selection)}</div>
    </div>
  );
}
