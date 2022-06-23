import { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import LoginButton from '../components/LoginButton'
import RegisterButton from '../components/RegisterButton'
// import CreateAccountButton from '../components/CreateAccountButton'


const HomePage = () => {
  

    
    
    return ( 
        <div className="home-page">
            <div className='title-container'>
                <h1>Swipe right®</h1>
                
                {/* <CreateAccountButton/> */}
                <LoginButton/>
                <RegisterButton/>
               
            
            </div>
            
            
        </div>
     );
}
 
export default HomePage;