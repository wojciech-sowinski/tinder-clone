import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import config from '../config'
import msgLogo from '../img/584856b4e0bb315b0f7675ac.png'
import { fetchMessages, sendMessage } from '../actions/messagesActions'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


const ChatInput = ({ activeMatch }) => {

    const messageInitial = {
        from: '',
        to: '',
        body: ''
    }

    const [message, setMessage] = useState('')
    const { messages, loading } = useSelector(state => state.messages)
    const { logged, userData } = useSelector(state => state.userData)
    const dispatch = useDispatch()

    const handleChange = (e) => {
        setMessage(e.target.value)
    }

    const sendMessageHandle = (e) => {
        e.preventDefault()

        setMessage('')

        dispatch(sendMessage({
            from: userData._id,
            to: activeMatch,
            body: message
        }))

    }
    return (
        <div className="chat-innput-container">
            <form onSubmit={sendMessageHandle}>
                <input type="text" name="chat-input"
                    value={message} onChange={handleChange} />
                <button className="chat-send-btn"><FontAwesomeIcon icon={faEnvelope} /></button>
            </form>
        </div>
    );
}

export default ChatInput;