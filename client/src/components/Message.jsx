import { useSelector,useDispatch } from 'react-redux'
import { useEffect } from 'react'

const Message = ({from,to,created,body,last}) => {
    const users =useSelector(state=>state.users)

    const userAvatarImg=(id)=>{
        
        const userImg = users[users.findIndex(user=>user._id===id )].imgUrl

        return userImg
    }

    useEffect(()=>{
        document.querySelector('.last').scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})
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