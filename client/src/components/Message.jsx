import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { msgDisplayed } from '../actions/messagesActions'

const Message = ({ from, to, created, body, last, displayed, msgId }) => {
    const { users } = useSelector(state => state.users)
    const { logged, userData } = useSelector(state => state.userData)
    const dispatch = useDispatch()

    const userAvatarImg = (id) => {

        const userImg = users[users.findIndex(user => user._id === id)].imgUrl[0]

        return userImg
    }

    const displayDate = () => {
        const date = new Date(created)

        const formatedDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}  ${date.getHours()}:${date.getMinutes()}`

        return formatedDate
    }

    useEffect(() => {
        document.querySelector('.last').scrollIntoView({ block: "end", inline: "nearest" })

        // if(last){
        //     dispatch(msgDisplayed(userData._id))
        // }



    }, [])

    return (
        <div className={`message ${last ? 'last' : ''}`}>
            <div className='message-top-bar'>
                <span>{displayDate()}</span>
                {/* <span>{displayed ? 'd' : 'n'}</span> */}
            </div>
            <div className='message-main-bar'>
                <div className="from">

                    <img src={userAvatarImg(from)} alt="" />
                </div>
                <div className='message-body'>
                    {body}
                </div>
            </div>


        </div>
    );
}

export default Message;