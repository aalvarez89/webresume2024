import React from 'react'
import { Route } from 'react-router-dom'


import {    Landing,
            Bio,
            Portfolio
        // AdminPage
     } from './Components'

// import PrivateRoutes from './Utils/PrivateRoutes'


const RouteConstants = {
    HOME: '/',
    BIO: '/bio',
    PORTFOLIO: '/portfolio',
    SKILLS: '/skills',
    BLOG: '/blog',
    SOCIAL: '/social',

    ADMIN: '/admin'
}

const Routes = [
    
    <Route key={`route-${RouteConstants.HOME}`}                 exact path={RouteConstants.HOME}                element={<Landing />} />,
    <Route key={`route-${RouteConstants.BIO}`}                  exact path={RouteConstants.BIO}                 element={<Bio />} />,
    <Route key={`route-${RouteConstants.PORTFOLIO}`}            exact path={RouteConstants.PORTFOLIO}           element={<Portfolio />} />,
    // <Route key={`route-${RouteConstants.SKILLS}`}                 exact path={RouteConstants.SKILLS}                element={<SKILLS />} />,
    
    // <Route key={`route-${'private'}`} element={<PrivateRoutes/>}>
    // <Route key={`route-${RouteConstants.ADMIN}`}                exact path={RouteConstants.ADMIN}               element={<AdminPage />} />,
    // </Route>,
    
]

export default Routes

export { RouteConstants }