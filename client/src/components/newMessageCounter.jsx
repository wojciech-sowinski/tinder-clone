import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const NewMessagesCounter = () => {

    const newMessages = useSelector(state => state.newMessages)
    const { logged } = useSelector(state => state.userData)
    const dispatch = useDispatch()

    useEffect(() => {

        if (!logged) {
            dispatch({ type: 'resetNewMessageCounter' })
        }

    }, [logged])

    return (
        <>
            {newMessages != 0 && logged ? (
                <Link to='/dashboard' className="new-message-counter">
                    <div >
                        <span>{newMessages}</span>
                        <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                </Link>
            ) : ''}
        </>

    );
}

export default NewMessagesCounter;