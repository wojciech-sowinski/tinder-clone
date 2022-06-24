import { useSelector,useDispatch } from 'react-redux';
import '../styles/buttons.scss'
import config from '../config'


const RegisterButton = () => {

    const dispatch = useDispatch()
    const {userData,logged} = useSelector(state=>state.userData)

    
    const onClickHandle =(e)=>{

        dispatch({type:'showRegisterForm'})
       
    }

    return ( <>
        {logged ? '' : (<div className="input-div">
                <input 
                    type="submit" 
                    value='Create Account'
                    name="register-submit"
                    id="register-submit-input"
                    onClick={onClickHandle}
                    className="register-button"/>
        </div>)}
        
    </> );
}
 
export default RegisterButton;