import { useEffect,useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import msgLogo from '../img/584856b4e0bb315b0f7675ac.png'
import { Link } from "react-router-dom";
import { fetchNewMessageCount } from "../actions/messagesActions";
import config from "../config";

const NewMessagesCounter = () => {

    // const [newMessages,setNewMessages] = useState(0)
    const newMessages = useSelector(state=>state.newMessages)
    const {userData,logged} = useSelector(state=>state.userData)
    const dispatch=useDispatch()

    


    useEffect(()=>{

        if(!logged){
            dispatch({type:'resetNewMessageCounter'})
            
        }

    },[logged])

    return ( 
        <>
        
        {newMessages!=0 && logged ? (
        <Link to='/dashboard' className="new-message-counter">
            <div >
            <span>{newMessages}</span>
            <img src={msgLogo} alt="" />
            </div>
        </Link>
        ) : ''}
        
        </>
        
     );
}
 
export default NewMessagesCounter;