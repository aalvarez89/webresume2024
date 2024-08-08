import { 
  BrowserRouter as Router, Routes 
} from 'react-router-dom';

import DOMRoutes from './routes'

import css from './Styles/App.module.scss';

import "./styles.css";

export default function App() {

  // const generateContent = (page) => {
  //   switch (page) {
      
  //     case "blog":
  //       return (
  //         <>
  //           <div className="subpage blog_page">
  //             <BlogPost />
  //             <div onClick={() => setMenu("Menu")} className="back_button">
  //               {" "}
  //               &rsaquo;{" "}
  //             </div>
  //           </div>
  //         </>
  //       );
  //     case "social":
  //       return (
  //         <>
  //           <div>
  //             <div>
  //               <img
  //                 className="github_logo"
  //                 alt="github logo"
  //                 src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
  //               />
  //             </div>
  //             <form>
  //               <input type="text"></input>
  //             </form>
  //             <div onClick={() => setMenu("Menu")} className="back_button">
  //               {" "}
  //               &rsaquo;{" "}
  //             </div>
  //           </div>
  //         </>
  //       );
  //     case "bio":
  //     default:
  //       return (
  //         <>
           
  //         </>
  //       );
  //   }
  // };

  return (
    // <GlobalUserContext.Provider value={useGlobalUserState()}>
      <div className={css.app}>
        <Router>
          {/* <Shell /> */}
          <Routes>
            { DOMRoutes }
          </Routes>
        </Router>
      </div>
    // </GlobalUserContext.Provider>
  );

}
