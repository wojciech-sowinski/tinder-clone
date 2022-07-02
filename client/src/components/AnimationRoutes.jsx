import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Switch,
    Link, useLocation
} from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"
import HomePage from '../pages/HomePage'
import DashboardPage from '../pages/DashboardPage'
import OnBoardPage from '../pages/OnBoardPage'
import TestPage from '../pages/TestPage';



const AnimationRoutes = () => {

    const location = useLocation()

    return (
        <>
            <AnimatePresence >
                <Routes location={location} key={location.key}>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/dashboard' element={<DashboardPage />} />
                    <Route path='/onboard' element={<OnBoardPage />} />
                    <Route path='/test' element={<TestPage />} />
                </Routes>
            </AnimatePresence>
        </>
    );
}

export default AnimationRoutes;