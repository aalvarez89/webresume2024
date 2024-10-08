import React from 'react'
import { Route } from 'react-router-dom'


import {    Landing,
            Bio,
            Portfolio,
            Skills,
            Social,
            Blog,
            Error404
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

    ERROR: '/404',

    ADMIN: '/admin'
}

const Routes = [
    
    <Route key={`route-${RouteConstants.HOME}`}         exact path={RouteConstants.HOME}            element={<Landing />} />,
    <Route key={`route-${RouteConstants.BIO}`}          exact path={RouteConstants.BIO}             element={<Bio />} />,
    <Route key={`route-${RouteConstants.PORTFOLIO}`}    exact path={RouteConstants.PORTFOLIO}       element={<Portfolio />} />,
    <Route key={`route-${RouteConstants.SKILLS}`}       exact path={RouteConstants.SKILLS}          element={<Skills />} />,
    <Route key={`route-${RouteConstants.SOCIAL}`}       exact path={RouteConstants.SOCIAL}          element={<Social />} />,
    <Route key={`route-${RouteConstants.BLOG}`}         exact path={RouteConstants.BLOG}            element={<Blog />} />,
    
    <Route key={`route-${RouteConstants.ERROR}`}        path={'*'}                                  element={<Error404 />} />

    // <Route key={`route-${'private'}`} element={<PrivateRoutes/>}>
    // <Route key={`route-${RouteConstants.ADMIN}`}                exact path={RouteConstants.ADMIN}               element={<AdminPage />} />,
    // </Route>,
    
]

export default Routes

export { RouteConstants }