import { useState } from 'react';
import '../styles/registerForm.scss'
import config from '../config';
import { useSelector, useDispatch } from 'react-redux'

const RegisterForm = () => {

    const initialRegisterFormState = {
        email:"",
        password:"",
        passwordConfirm:"",
        info:''
    }

    const [registerFormData,setRegisterFormData]=useState(initialRegisterFormState)

    const {showModal,formType} = useSelector(state=>state.modalReducer)
    const userData = useSelector(state=>state.userData)
    const dispatch = useDispatch()




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

    const handleRegisterSubmit=(e)=>{
        e.preventDefault()
        
        const {email,password,passwordConfirm,info} = registerFormData
        
        if(password!==passwordConfirm){
            setRegisterFormData(prev=>({
                ...prev,info:'Password and password confirmation do not match.'
            }))
        }else{

            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email,password})
            };

            fetch(config.serverUrl+'register',requestOptions)
            .then(response=>{
                if(!response.ok){
                    throw new Error('register data send error')
                }
                return response.json()
            })
            .then(data=>{
                if(data.result==="account created"){   
                    
                    

                    setRegisterFormData(prev=>({
                        ...prev
                        ,info:'Congratulations. Your account has been created. Before you can use it, you must log in.'
                    }))
                    

                    setTimeout(() => {
                        setRegisterFormData(prev=>({
                            ...prev
                            ,info:''
                        }))
                        dispatch({type:'showLoginForm'})
                    }, 5000);
                }
                else if(data.result==="user exists"){
                    setRegisterFormData(prev=>({
                        ...prev
                        ,info:'A user with this email address already exists in the system.'
                    }))
                    
                    setTimeout(() => {
                        setRegisterFormData(prev=>({
                            ...prev
                            ,info:''
                        }))
                    }, 5000);
                }
            })
        }
    }


    return ( 
      
        <>
        <form onSubmit={handleRegisterSubmit} id="register-form">
            <div>
                <h2>Create New Account</h2>
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
                    id="register-submit-input"
                    className='sign-in-button'/>
            </div>
            {!registerFormData.info==='' ? (<div className='register-info'>
                <h2>{registerFormData.info}</h2>
            </div>) : ''}
            

        </form>
        
        </>
     );
}
 
export default RegisterForm;