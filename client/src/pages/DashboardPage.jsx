import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import LogInInfo from "../components/LoginInfo";
import SwipeContainer from '../components/SwipeContainer'
import ChatContainer from '../components/ChatContainer'
import MatchedUserPage from "../components/MatchedUserPage";
import { motion, AnimatePresence } from 'framer-motion'
import { pageContainerVariants, divContainerVariants } from '../animations/motion'

import '../styles/dashboardPage.scss'


const DashboardPage = () => {

    const dispatch = useDispatch()
    const { logged, userData } = useSelector(state => state.userData)
    const [activeMatch, setActiveMatch] = useState(false)

    const dashboardPageRender = (logged) => {

        if (logged) {



            return <>
                <AnimatePresence exitBeforeEnter>
                    {activeMatch ? <MatchedUserPage key={'matchuserpagekey'} activeMatch={activeMatch} /> : <SwipeContainer key={'swipecontainerkey'} activeMatch={activeMatch} />}
                </AnimatePresence>
                <ChatContainer activeMatch={activeMatch} setActiveMatch={setActiveMatch} />
            </>
        } else {
            return <LogInInfo />
        }

    }


    useEffect(() => {

        if (!logged) {
            dispatch({ type: 'showLoginForm' })
        }

    }, [])

    return (
        <motion.div className={`dashboard-page`}
            variants={pageContainerVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
            key={'dashboardpagekey'}
        >

            {dashboardPageRender(logged)}

        </motion.div>
    );
}

export default DashboardPage;