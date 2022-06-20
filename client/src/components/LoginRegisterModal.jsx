import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const LoginRegisterModal = () => {

    const {showModal,formType} = useSelector(state=>state.modalReducer)

    const showForm=()=>{
        if(showModal){
            if(formType==='loginForm'){
                return <LoginForm/>
            }else if(formType==='registerForm'){
                return <RegisterForm/>
            }
        }
    }

    return ( 
        
        <div className="login-register-modal">
            {showForm()}
        </div>
     );
}
 
export default LoginRegisterModal;