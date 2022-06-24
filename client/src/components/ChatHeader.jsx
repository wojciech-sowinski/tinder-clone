import {useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import config from '../config'
import blankUser from '../img/blank-profile-picture.png'


const ChatHeader = ({activeMatch}) => {

    const {logged,userData} =useSelector(state=>state.userData)
    const users =useSelector(state=>state.users)

    const guestImgUrl=(id)=>{
        if(!id){
            return config.defaultUserImg
        }else{
            return users[users.findIndex((user)=> activeMatch===user._id)].imgUrl
        }
    }

    return ( 
        <>
        <div className="chat-header">
            <div className='user-img'>
                <img src={userData.imgUrl} alt="" />
            </div>
            <div><span>talk with</span></div>
            <div className='guess-img'>
                <div className='match-thumb-img-container'>
                        <img className='match-thumb-img' key={activeMatch}  src={guestImgUrl(activeMatch)} alt="" />
                    </div>
            </div>
        </div>
        </>
     );
}
 
export default ChatHeader;