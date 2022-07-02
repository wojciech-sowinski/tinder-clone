import logo from '../img/logo-red.png'
import { useSelector, useDispatch } from 'react-redux'
import LoginButton from './LoginButton'
import { NavLink } from "react-router-dom";
import '../styles/mainNav.scss'
import NewMessagesCounter from './newMessageCounter';


const MainNav = () => {


    const { showModal, formType } = useSelector(state => state.modalReducer)
    const { userData, logged } = useSelector(state => state.userData)
    const dispatch = useDispatch()



    return (
        <nav className="main-nav">
            <div className="nav-logo-container">
                <img src={logo} alt="" />
                <span>Swipe right®</span>
            </div>
            <ul>
                <li>
                    <NavLink to='/' >
                        Home Page
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/dashboard' >
                        Dashboard
                    </NavLink>

                </li>
                <li>
                    <NavLink to='/onboard' >
                        Your Profile
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/test' >
                        test
                    </NavLink>
                </li>
            </ul>
            <div>
                <NewMessagesCounter />
            </div>
            <div className='login-button-container'>
                <LoginButton />
            </div>
        </nav>
    );
}

export default MainNav;