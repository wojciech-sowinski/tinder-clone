import { useState,useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import '../styles/loginForm.scss'
import config from '../config'


const LoginButton = () => {

    const dispatch = useDispatch()
    const {userData,logged} = useSelector(state=>state.userData)


    useEffect(()=>{
        // dispatch({type:'isLogged'})


    },[[logged]])


    const onClickHandle =(e)=>{

        if(!logged){
            dispatch({type:'showLoginForm'})
        }else{
            dispatch({type:'logOut'})
        }
    }

    return ( <>
        
        <div className="input-div">
                <input 
                    type="submit" 
                    value={logged ? "Log Out" : "Log In"} 
                    name="login-submit"
                    id="login-submit-input"
                    onClick={onClickHandle}
                    className="login-button"/>
        </div>
    </> );
}
 
export default LoginButton;