import { useState,useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import '../styles/LoginRegisterModal.scss'

const LoginRegisterModal = () => {

    const {showModal,formType} = useSelector(state=>state.modalReducer)
    const userData = useSelector(state=>state.userData)
    const dispatch = useDispatch()

    const showForm=()=>{
        if(showModal){
            if(formType==='loginForm'){
                return <LoginForm/>
            }else if(formType==='registerForm'){
                return <RegisterForm/>
            }
        }
    }


    useEffect(()=>{
        
      },[])
    

    return ( 
        <>
        {userData.logged ? '' : ( <div className="login-register-modal">
            <div>
            {showForm()}
            </div>
            <div onClick={()=>{dispatch({type:'hideModal'})}} className="overlay"></div>
            
        </div>)}
        
        </>
       
     );
    }
    
    export default LoginRegisterModal;
   