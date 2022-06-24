import { useEffect, useState } from 'react'
import config from '../config'
import { useSelector,useDispatch } from 'react-redux'

const ChatMatches = ({setActiveMatch,setOption}) => {

    const {logged,userData} =useSelector(state=>state.userData)
    const messages =useSelector(state=>state.messages)
    const users =useSelector(state=>state.users)

    const [matchesToRender,setMatchesToRender] = useState([])


    const matchMessageCounter =(fromId)=>{

        const messageCounter = messages.filter(message=>message.from===fromId && !message.displayed).length

        if(messageCounter){
            return (
                <span className='match-new-messages'>{messageCounter}</span>
            )
        }else{
            return null
        }

    }

    const renderUserMatches=()=>{
        if(users.length){
            const userMatches = [...userData.matches]

        const matches = userMatches.map((match)=>{
            return (
                <div className='match-thumb-img-container'
                key={match}>
                    <img className='match-thumb-img'  onClick={()=>{
                        setActiveMatch(match)
                        setOption('chat')}} src={users[users.findIndex((user)=> match===user._id)].imgUrl} alt="" />
                   
                    {matchMessageCounter(match)}
                    <span className='match-first-name'>{users[users.findIndex((user)=> match===user._id)].firstName}</span>
                </div>
            )
        })
        setMatchesToRender(matches) 
    }
    
    }

    useEffect(()=>{
        renderUserMatches()
    },[users,messages,userData])

    return ( 
        <>
        <h3>Your Matches</h3>
        <div className="chat-matches">

        
            {matchesToRender}
        
        </div>
        </>
     );
}
 
export default ChatMatches;