import logo from '../img/logo-red.png'
import LoginButton from './LoginButton'
import { NavLink } from "react-router-dom";
import '../styles/mainNav.scss'
import NewMessagesCounter from './newMessageCounter';


const MainNav = () => {

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