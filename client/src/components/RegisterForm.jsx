import { useState } from 'react';
import '../styles/registerForm.scss'

const RegisterForm = () => {

    const initialRegisterFormState = {
        email:"",
        password:"",
        passwordConfirm:"",
        info:''
    }

    const [registerFormData,setRegisterFormData]=useState(initialRegisterFormState)

    const inputLoginHandle=(e)=>{
        setRegisterFormData(prev=>{
            return {
                ...prev,
                email: e.target.value
            }
        })
    }
    const inputPasswordHandle=(e)=>{
        setRegisterFormData(prev=>{
            return {
                ...prev,
                password: e.target.value
            }
        })
    }
    const inputPasswordConfirmHandle=(e)=>{

        if(e.target.value!==registerFormData.password){
            setRegisterFormData(prev=>{
                return {
                    ...prev,
                    info: 'Password and confirm is not the same'
                }
            })
        }else{
            setRegisterFormData(prev=>{
                return {
                    ...prev,
                    info: ''
                }
            })
        }

        setRegisterFormData(prev=>{
            return {
                ...prev,
                passwordConfirm: e.target.value
            }
        })
    }



    return ( 
      
        <>
        <form id="register-form">
            <div>
                <h2>Register your accont</h2>
            </div>
            <div className="input-div">
                <input 
                    type="email" 
                    required
                    name="register-email"
                    id="register-email-input"
                    value={registerFormData.email}
                    onChange={inputLoginHandle}/>
                <span>Email</span>
            </div>
            <div className="input-div">
                <input 
                    type="password" 
                    name="register-password" 
                    id="register-password-input" 
                    required
                    value={registerFormData.password}
                    onChange={inputPasswordHandle}/>
                <span>Password</span>
            </div>
            <div className="input-div">
                <input 
                    type="password" 
                    name="register-password-confirm" 
                    id="register-password-confirm-input" 
                    required
                    value={registerFormData.passwordConfirm}
                    onChange={inputPasswordConfirmHandle}/>
                <span>Confirm Password</span>
            </div>
            <div className="input-div">
                <input 
                    type="submit" 
                    value="Sign In" 
                    name="register-submit"
                    id="register-submit-input"/>
            </div>
            <div className='register-info'>
                <h2>{registerFormData.info}</h2>
            </div>

        </form>
        
        </>
     );
}
 
export default RegisterForm;