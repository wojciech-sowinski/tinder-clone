import { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import LoginButton from '../components/LoginButton'
import RegisterButton from '../components/RegisterButton'
import '../styles/homePage.scss'



const HomePage = () => (
    <div className="home-page">
        <div className='title-container'>
            <h1>Swipe right®</h1>
            <LoginButton />
            <RegisterButton />
        </div>
    </div>
)
 
export default HomePage;