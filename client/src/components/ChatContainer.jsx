import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRotateBack } from '@fortawesome/free-solid-svg-icons'


import ChatHeader from './ChatHeader'
import ChatMatches from './ChatMatches'
import ChatMessages from './ChatMessages';
import ChatInput from './ChatInput';

import { msgDisplayed } from '../actions/messagesActions';

const ChatContainer = () => {

    const [activeMatch, setActiveMatch] = useState(false)
    const [option, setOption] = useState('matches')
    const { messages, loading } = useSelector(state => state.messages)
    const dispatch = useDispatch()
    const setOptionHandle = (e) => {
        setOption("matches")
        setActiveMatch(false)

    }




    return (
        <>
            <div className="chat-container">
                <ChatHeader activeMatch={activeMatch} />
                <div className='options'>
                    {activeMatch ? (
                        <button
                            onClick={setOptionHandle}
                            className={`chat-options ${activeMatch ? 'active' : ''}`} value="matches">Back to Matches <FontAwesomeIcon icon={faRotateBack} /></button>
                    ) : ''}


                </div>
                {option === 'matches' ?
                    <ChatMatches setActiveMatch={setActiveMatch} setOption={setOption} /> : (activeMatch ? <><ChatMessages activeMatch={activeMatch} /> <ChatInput activeMatch={activeMatch} /></> : '')}
            </div>
        </>
    );
}

export default ChatContainer;