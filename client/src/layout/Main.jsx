import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import HomePage from '../pages/HomePage'
import DashboardPage from '../pages/DashboardPage'
import OnBoardPage from '../pages/OnBoardPage'
import '../styles/main.scss'

const Main = () => {
    return ( <main>
        <Routes>
              <Route path='/' element={<HomePage/>}/>
              <Route path='/dashboard' element={<DashboardPage/>}/>
              <Route path='/onboard' element={<OnBoardPage/>}/>
        </Routes>


    </main> );
}
 
export default Main;