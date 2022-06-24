import { useSelector,useDispatch } from 'react-redux'
import { useEffect } from 'react'

const Message = ({from,to,created,body,last,displayed,msgId}) => {
    const users =useSelector(state=>state.users)
    const {logged,userData} =useSelector(state=>state.userData)
    const dispatch =useDispatch()

    const userAvatarImg=(id)=>{
        
        const userImg = users[users.findIndex(user=>user._id===id )].imgUrl

        return userImg
    }

    const messagesDisplayed =()=>{

        if(userData._id===to && !displayed){
            dispatch({type:'msgDisplayed',payload:msgId})
        }

    }

    useEffect(()=>{
        document.querySelector('.last').scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})

        messagesDisplayed()

    },[])

    return ( 
        <div className={`message ${last ? 'last' : ''}`}>
            
           
            <div className="from">
               
                <img src={userAvatarImg(from)} alt="" />
            </div>
            <div className='message-body'>
                {body}
            </div>
        </div>
     );
}
 
export default Message;