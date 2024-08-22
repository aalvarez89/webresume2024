import { BrowserRouter as Router } from 'react-router-dom';
import { AnimatedRoutes } from './AnimatedRoutes';

import css from './Styles/App.module.scss';
import { Layout, Shell } from './Components';
import { GlobalSiteContext, useGlobalSiteState } from './Store/GlobalSiteContext';
export default function App() {

  return (
    <GlobalSiteContext.Provider value={useGlobalSiteState()}>
      <div className={css.app}>
        <Router>
          <Shell />
          <Layout>
            <AnimatedRoutes />
          </Layout>
        </Router>
      </div>
    </GlobalSiteContext.Provider>
  )
}
