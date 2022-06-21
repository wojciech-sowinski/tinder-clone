import { useState,useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import '../styles/loginForm.scss'
import config from '../config'




const LoginForm = () => {

    const initialLoginFormState = {
        email:"",
        password:"",
        info:""
    }

    const [loginFormData,setLoginFormData]=useState(initialLoginFormState)


    const {showModal,formType} =useSelector(state=>state.modalReducer)
    const {userData} = useSelector(state=>state.userData)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch({type:'isLogged'})
        
    },[])

    const inputLoginHandle=(e)=>{
        setLoginFormData(prev=>{
            return {
                ...prev,
                email: e.target.value
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

    const submitHandle=(e)=>{

        const {email,password,info} = loginFormData
                

        e.preventDefault()
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({ email,password})
        };

        fetch(config.serverUrl+'login',requestOptions)
            .then(response=>{
                if(!response.ok){
                    throw new Error('register data send error')
                }
                return response.json()
            })
            .then(data=>{
               console.log(data,'data from fetch');
               dispatch({type:"setUserData",payload:data})
                })

    }


    return ( 
      
        <>
        <form onSubmit={submitHandle} id="login-form">
            <div>
                <h2>Log In to your account</h2>
            </div>
            <div className="input-div">
                <input 
                    type="email" 
                    required
                    name="login-email"
                    id="login-email-input"
                    value={loginFormData.email}
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