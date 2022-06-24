import { useEffect, useState,useRef } from 'react'
import config from '../config'
import Message from './Message'
import { useSelector,useDispatch } from 'react-redux'


const ChatMessages = ({activeMatch}) => {
    const users =useSelector(state=>state.users)
    
    const {userData} =useSelector(state=>state.userData)
    const messages =useSelector(state=>state.messages)
    const dispatch = useDispatch()
    const lastMessage = useRef(null);
    
    const [msgsToRender,setMsgsToRender] =useState(messages)

    useEffect(()=>{

        setMsgsToRender(messages)
        
       
        return ()=>{
            // clearInterval(messagesCheck)
            setMsgsToRender([])
            
        }

    },[messages])


    const renderMessages=()=>{

        let msgs = [...msgsToRender]?.filter(message=>((message.from===userData._id && message.to===activeMatch) || (message.from===activeMatch && message.to===userData._id)))
        
              
        
        return msgs.map((message,index)=>{
         
            const {from,to,created,body} = message
            return <Message key={message._id} from={from} to={to} created={created} body={body} last={(index)==msgs.length-1 ? true : false}/>
        })

    }

    return ( 

        <>
        
        <div className="chat-messages">
            {renderMessages()}
        </div>
        </>
     );
}
 
export default ChatMessages;