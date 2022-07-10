import React from 'react';
import {
    Routes,
    Route,
    useLocation
} from "react-router-dom";
import { AnimatePresence } from "framer-motion"
import HomePage from '../pages/HomePage'
import DashboardPage from '../pages/DashboardPage'
import OnBoardPage from '../pages/OnBoardPage'


const AnimationRoutes = () => {

    const location = useLocation()

    return (
        <>
            <AnimatePresence >
                <Routes location={location} key={location.key}>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/dashboard' element={<DashboardPage />} />
                    <Route path='/onboard' element={<OnBoardPage />} />
                </Routes>
            </AnimatePresence>
        </>
    );
}

export default AnimationRoutes;