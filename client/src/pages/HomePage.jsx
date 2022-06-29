import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import LoginButton from '../components/LoginButton'
import RegisterButton from '../components/RegisterButton'
import '../styles/homePage.scss'
import { motion } from 'framer-motion'
import { pageContainerVariants } from '../animations/motion'



const HomePage = () => {




    return (
        <motion.div className="home-page"
            variants={pageContainerVariants}
            initial='hidden'
            animate='visible'
            exit='exit'   >



            <div className='title-container'>
                <h1>Swipe right®</h1>
                <LoginButton />
                <RegisterButton />
            </div>
        </motion.div>
    )

}

export default HomePage;