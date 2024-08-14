import { BrowserRouter as Router } from 'react-router-dom';
import { AnimatedRoutes } from './AnimatedRoutes';

import css from './Styles/App.module.scss';
import { Layout, Shell } from './Components';

// import "./styles.css";

export default function App() {

  return (
    // <GlobalUserContext.Provider value={useGlobalUserState()}>
      <div className={css.app}>
        <Router>
          <Shell />
          <Layout>
            <AnimatedRoutes />
          </Layout>
        </Router>
      </div>
    // </GlobalUserContext.Provider>
  )
}
