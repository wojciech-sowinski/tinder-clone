// import ChatContainer from "../components/ChatContainer";
// import SwipeContainer from "../components/SwipeContainer";
import { useEffect } from "react";
import { useSelector,useDispatch } from 'react-redux'
// import LogInInfo from "../components/LoginInfo";


const DashboardPage = () => {
        
    const dispatch = useDispatch()
    const {logged,userData} =useSelector(state=>state.userData)

    useEffect(()=>{
     
        dispatch({type:'isLogged'})

    
    },[])

    return ( 
        <div className="dashboard-page">    
{/* 
         {!logged ? <LogInInfo/> :  <SwipeContainer/>} 
         {!logged ? <LogInInfo/> :  <ChatContainer/>}  */}
            
        </div>
     );
}
 
export default DashboardPage;