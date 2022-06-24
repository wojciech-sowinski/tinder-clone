import { useState,useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import '../styles/loginForm.scss'
import config from '../config'
import RegisterButton from './RegisterButton';




const LoginForm = () => {

    const initialLoginFormState = {
        email:"",
        password:"",
        info:""
    }

    const [loginFormData,setLoginFormData]=useState(initialLoginFormState)


    const {showModal,formType} =useSelector(state=>state.modalReducer)
    const {userData,logged} = useSelector(state=>state.userData)
    const dispatch = useDispatch()

    useEffect(()=>{
        // dispatch({type:'isLogged'})

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

        e.preventDefault()
        const {email,password,info} = loginFormData
                
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
               console.log('login submit');
            //    dispatch({type:"setUserData",payload:data})
               dispatch({
                type: 'isLogged'
              })
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
                    id="login-submit-input"
                    className='login-button'/>
            </div>
            {!loginFormData.info==='' ? (<div>
                <h2>{loginFormData.info}</h2>
            </div>) : ''}
            <div>
                <h4>Don't have Account? Create New.</h4>
            </div>
                <RegisterButton/>
            

        </form>
        
        </>
     );
}
 
export default LoginForm;