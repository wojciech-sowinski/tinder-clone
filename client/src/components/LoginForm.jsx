import { useState } from 'react';
import '../styles/loginForm.scss'

const LoginForm = () => {

    const initialLoginFormState = {
        login:"",
        password:"",
        info:""
    }

    const [loginFormData,setLoginFormData]=useState(initialLoginFormState)

    const inputLoginHandle=(e)=>{
        setLoginFormData(prev=>{
            return {
                ...prev,
                login: e.target.value
            }
        })
    }
    const inputPasswordHandle=(e)=>{
        setLoginFormData(prev=>{
            return {
                ...prev,
                password: e.target.value
            }
        })
    }



    return ( 
      
        <>
        <form id="login-form">
            <div>
                <h2>Log In to your account</h2>
            </div>
            <div className="input-div">
                <input 
                    type="email" 
                    required
                    name="login-email"
                    id="login-email-input"
                    value={loginFormData.login}
                    onChange={inputLoginHandle}/>
                <span>Email</span>
            </div>
            <div className="input-div">
                <input 
                    type="password" 
                    name="login-password" 
                    id="login-password-input" 
                    required
                    value={loginFormData.password}
                    onChange={inputPasswordHandle}/>
                <span>Password</span>
            </div>
            <div className="input-div">
                <input 
                    type="submit" 
                    value="Log In" 
                    name="login-submit"
                    id="login-submit-input"/>
            </div>
            <div>
                <h2>{loginFormData.info}</h2>
            </div>

        </form>
        
        </>
     );
}
 
export default LoginForm;