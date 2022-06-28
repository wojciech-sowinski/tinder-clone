// import ChatContainer from "../components/ChatContainer";
// import SwipeContainer from "../components/SwipeContainer";
import { useEffect } from "react";
import { useSelector,useDispatch } from 'react-redux'
import LogInInfo from "../components/LoginInfo";
import SwipeContainer from '../components/SwipeContainer'
import ChatContainer from '../components/ChatContainer'
import '../styles/dashboardPage.scss'


const DashboardPage = () => {
        
    const dispatch = useDispatch()
    const {logged,userData} =useSelector(state=>state.userData)

    useEffect(()=>{
     
       
        

    
    },[])

    return ( 
        <div className="dashboard-page">    

         {!logged ? <LogInInfo/> :  <SwipeContainer/>} 
         {!logged ? <LogInInfo/> :  <ChatContainer/>} 
            
        </div>
     );
}
 
export default DashboardPage;