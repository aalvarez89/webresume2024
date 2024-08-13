import React from 'react'
import { Routes, useLocation } from 'react-router-dom';

import DOMRoutes from './routes'

import { AnimatePresence } from 'framer-motion';

export const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait" initial={false}>
            <Routes location={location} key={location.pathname}>
                { DOMRoutes }
            </Routes>
        </AnimatePresence>
      )
}
