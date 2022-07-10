import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../styles/loginForm.scss'
import RegisterButton from './RegisterButton';
import { login } from '../actions/userActions';
import { motion, AnimatePresence } from 'framer-motion'
import { divFlipHorizontalWithResize } from '../animations/motion'



const LoginForm = () => {

    const initialLoginFormState = {
        email: "",
        password: "",
        resultInfo: ""
    }

    const [loginFormData, setLoginFormData] = useState(initialLoginFormState)
    const { resultInfo } = useSelector(state => state.userData)
    const dispatch = useDispatch()

    const inputLoginHandle = (e) => {
        setLoginFormData(prev => {
            return {
                ...prev,
                email: e.target.value
            }
        })
    }


    const inputPasswordHandle = (e) => {
        setLoginFormData(prev => {
            return {
                ...prev,
                password: e.target.value
            }
        })
    }

    const submitHandle = (e) => {
        e.preventDefault()
        const { email, password, info } = loginFormData;

        dispatch(login({ email, password }))
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
                        onChange={inputLoginHandle} />
                    <span>Email</span>
                </div>
                <div className="input-div">
                    <input
                        type="password"
                        name="login-password"
                        id="login-password-input"
                        required
                        value={loginFormData.password}
                        onChange={inputPasswordHandle} />
                    <span>Password</span>
                </div>
                <div className="input-div">
                    <input
                        type="submit"
                        value="Log In"
                        name="login-submit"
                        id="login-submit-input"
                        className='login-button' />
                </div>
                <div>
                    <AnimatePresence>
                        {resultInfo ? (<motion.h2
                            className='register-info'

                            variants={divFlipHorizontalWithResize}
                            initial='hidden'
                            animate='visible'
                            exit='exit'>
                            {resultInfo}
                        </motion.h2>) : ''}
                    </AnimatePresence>
                </div>
                <div>
                    <h4>Don't have Account? Create New.</h4>
                </div>
                <RegisterButton />
            </form>
        </>
    );
}

export default LoginForm;