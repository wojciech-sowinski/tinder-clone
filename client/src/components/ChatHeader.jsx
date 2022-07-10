import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import config from '../config'
import blankUser from '../img/blank-profile-picture.png'
import { motion, AnimatePresence } from 'framer-motion'
import { divContainerVariants, divFlipContainerVariants } from '../animations/motion';

const ChatHeader = ({ activeMatch }) => {

    const { logged, userData } = useSelector(state => state.userData)
    const { users } = useSelector(state => state.users)

    const guestImgUrl = (id) => {
        if (!id) {
            return blankUser
        } else {
            return users[users.findIndex((user) => activeMatch === user._id)].imgUrl[0]
        }
    }

    return (
        <>
            <div className="chat-header">
                <div className='user-img'>
                    <AnimatePresence exitBeforeEnter>
                        <motion.img
                            key={"chatheaderuserimgkey"}
                            variants={divContainerVariants}
                            initial='hidden'
                            animate='visible'
                            exit='exit'
                            src={userData.imgUrl[0]} alt="" />
                    </AnimatePresence>
                </div>
                <div><span>talk with</span></div>
                <div className='guess-img'>
                    <AnimatePresence exitBeforeEnter>
                        <motion.img
                            className='match-thumb-img'
                            key={activeMatch}
                            src={guestImgUrl(activeMatch)}
                            alt=""

                            variants={divContainerVariants}
                            initial='hidden'
                            animate='visible'
                            exit='exit' />
                    </AnimatePresence>
                </div>
            </div>
        </>
    );
}

export default ChatHeader;