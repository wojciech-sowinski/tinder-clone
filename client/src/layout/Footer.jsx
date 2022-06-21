import { useSelector, useDispatch } from 'react-redux'
import LoginButton from '../components/LoginButton'

const Footer = () => {

    const dispatch=useDispatch()

    const login=()=>{
        dispatch({type:'showLoginForm'})
    }
    const register=()=>{
        dispatch({type:'showRegisterForm'})
    }
    const hide=()=>{
        dispatch({type:'hideModal'})
    }

    return ( 
        <footer>
            this is footer
            <button onClick={login}>login modal</button>
            <button onClick={register}>register modal</button>
            <button onClick={hide}>hide modal</button>
            <LoginButton/>
        </footer>
     );
}
 
export default Footer;