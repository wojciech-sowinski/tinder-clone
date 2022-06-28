import { useState,useEffect } from "react";
import { useSelector,useDispatch } from 'react-redux'
import LogInInfo from "../components/LoginInfo";
import blankImg from '../img/blank-profile-picture.png'
import '../styles/onBoardPage.scss'
import config from "../config";
import { isLogged } from "../actions/userActions";


const OnBoardPage = () => {

    
    const {userData,logged} = useSelector(state=>state.userData)
    const dispatch = useDispatch()


    const initialFormData = {
        firstName:'',
        birthDate:'',
        gender:'',
        interest:'',
        aboutMe:'',
        imgUrl:'',
        email:'',
        matches:[]
    }
    const [formData,setFormData] = useState(initialFormData)
    const [updateResult,setUpdateResult] = useState('Submit Changes')

   
    const handleFirstNameChange =(e)=>{setFormData((prev)=>{
        return {...prev,
                firstName:e.target.value}
    })}
    const handleEmailNameChange=(e)=>{
        setFormData((prev)=>({
            ...prev,
            email: e.target.value
        }))
    }
    const handleBirthDateChange =(e)=>{
        setFormData((prev)=>{
            return {
                ...prev,
                birthDate:e.target.value
            }
        })
    }
    const handleGenderChoose=(e)=>{
        e.preventDefault()



        switch (e.currentTarget.innerText) {
            case "Male":
                setFormData((prev)=>{
            return {
                ...prev,
                gender:"Male"
            }
        })
                break;
            case "Female":
                
                setFormData((prev)=>{
                    return {
                        ...prev,
                        gender:"Female"
                    }
                })
                break;
        
            default:
                break;
        }
    }
    const handleInterestChoose=(e)=>{
        e.preventDefault()
        switch (e.currentTarget.innerText) {
            case "Male":
                setFormData((prev)=>{
            return {
                ...prev,
                interest:"Male"
            }
        })
                break;
            case "Female":
                
                setFormData((prev)=>{
                    return {
                        ...prev,
                        interest:"Female"
                    }
                })
                break;
            case "Everyone":
                
                setFormData((prev)=>{
                    return {
                        ...prev,
                        interest:"Everyone"
                    }
                })
                break;
        
            default:
                break;
        }
    }
    const handleAboutMeChange=(e)=>{
        setFormData((prev)=>{
            return {
                ...prev,
                aboutMe:e.target.value
            }
        })
        
    }
    const handleImgUrlChange=(e)=>{
        setFormData((prev)=>{
            return {
                ...prev,
                imgUrl:e.target.value
            }
        })
    }
    const submitHandle=(e)=>{
        e.preventDefault()
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify(formData)
        };
       
        fetch(config.serverUrl+'user',requestOptions)
        .then(response=>{
            if(response.ok){
               return response.json()
            }
        })
        .then(data=>{
            if(data.result==='user data updated'){
                // dispatch({type:'setUserData',payload:formData})
                dispatch(isLogged())
                setUpdateResult('Changes Saved')
                setTimeout(() => {
                    setUpdateResult('Submit Changes')
                }, 2000);
            }
        })
    }
    const UserProfileForm=()=>{
               
            return(
                <div className="on-board-page">
            <h1>Your Profile</h1>
            <form onSubmit={submitHandle}>
                <div className="first-col">
                    <div>
                        <label>First Name</label>
                    </div>
                    <div>
                        <input 
                            type="text" 
                            name="firstName"
                            required
                            value={formData.firstName}
                            onChange={handleFirstNameChange}/>
                    </div>
                    <div>
                        <label htmlFor="">Email</label>
                    </div>
                    <div>
                    <input 
                            type="text" 
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleEmailNameChange}/>
                    </div>
                    <div>
                        <label htmlFor="">Birthday Date</label>
                    </div>
                    <div>
                        <input type="date"
                        name="birthDate"
                        required
                        value={formData.birthDate.slice(0,10)}
                        onChange={handleBirthDateChange}/>
                    </div>
                    <div>
                        <label htmlFor="">Gender</label>
                    </div>
                    <div>
                        <button
                            name="genderChoiceMale"                        
                            className={formData.gender==='Male' ? 'active' : ''}
                            onClick={handleGenderChoose}>Male</button>
                        <button 
                            name="genderChoiceFemale" 
                            className={formData.gender==='Female' ? 'active' : ''}
                            onClick={handleGenderChoose}>Female</button>
                    </div>
                    <div>
                        <label>Show Me</label>
                    </div>
                    <div>
                        <button
                            name="interestChoiceMale" 
                            onClick={handleInterestChoose}
                            className={formData.interest==='Male' ? 'active' : ''}
                        >Male</button>
                        <button
                            name="interestChoiceFemale" 
                            onClick={handleInterestChoose}
                            className={formData.interest==='Female' ? 'active' : ''}>Female</button>
                        <button
                            name="interestChoiceEveryone" 
                            onClick={handleInterestChoose}
                            className={formData.interest==='Everyone' ? 'active' : ''}>Everyone</button>
                    </div>
                    <div>
                        <label>About Me</label>
                    </div>
                    <div>
                        <textarea cols="30" rows="10"
                        onChange={handleAboutMeChange}
                        name="aboutMe"
                        value={formData.aboutMe}>
                        </textarea>
                    </div>
                </div>
                <div className="second-col">
                    <div>
                        <label>Profile Photo</label>
                    </div>
                    <div>
                        <input type="url" placeholder="past your photo URL"
                        name="imgUrl"
                        onChange={handleImgUrlChange}
                        value={formData.imgUrl}/>
                    </div>
                    <div className="user-img-container">
                        <img src={formData.imgUrl || blankImg} alt="user main photo" />
                    </div>
                    <div style={{textAlign:"center"}}>
                        <button className="submit-button" type="submit">{updateResult}</button>
                    </div>
                </div>
                
            </form>
            
        </div>
            )
        
    }

    

    useEffect(()=>{      

        if(!logged){   
            dispatch({type:'showLoginForm'})
        }else{
            setFormData({...initialFormData,...userData})
        }

    },[logged])
    

    return ( 
        <>
           {!logged ? <LogInInfo/> : UserProfileForm()}
        </>
     );
}
 
export default OnBoardPage;