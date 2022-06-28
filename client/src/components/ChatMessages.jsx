import { useEffect, useState,useRef } from 'react'
import config from '../config'
import Message from './Message'
import { useSelector,useDispatch } from 'react-redux'
import { msgDisplayed } from '../actions/messagesActions'


const ChatMessages = ({activeMatch}) => {
    const users =useSelector(state=>state.users)
    
    const {logged,userData} =useSelector(state=>state.userData)
    const {messages,loading} =useSelector(state=>state.messages)
    const dispatch = useDispatch()
    const lastMessage = useRef(null);
    
    const [msgsToRender,setMsgsToRender] =useState(messages)

    

    useEffect(()=>{

        setMsgsToRender(messages)
       console.log('chat diplay');
    //    setTimeout(() => {
    //     dispatch({type:'msgDisplayed',payload:userData._id})
    //    }, 3000);
        return ()=>{
            // clearInterval(messagesCheck)
            setMsgsToRender([])
            dispatch(msgDisplayed(activeMatch,userData._id))
        }

    },[messages])




    const renderMessages=()=>{

        let msgs = [...msgsToRender]?.filter(message=>((message.from===userData._id && message.to===activeMatch) || (message.from===activeMatch && message.to===userData._id)))
        
              
        
        return msgs.map((message,index)=>{
         
            const {from,to,created,body,displayed,_id} = message
            
            return <Message 
                        key={_id} 
                        from={from} 
                        to={to} 
                        created={created} 
                        body={body} 
                        displayed={displayed} 
                        msgId={_id} 
                        last={(index)==msgs.length-1 ? true : false}/>
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