import './styles/app.scss'
import '../src/styles/buttons.scss'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Header from './layout/Header';
import Main from './layout/Main';
import Footer from './layout/Footer';
import LoginRegisterModal from './components/LoginRegisterModal';
import { useEffect } from 'react';


import { useSelector, useDispatch } from 'react-redux'

function App() {

  const {showModal,formType} = useSelector(state=>state.modalReducer)
  const dispatch=useDispatch()

  
  return (
    <Router>
      <div className="App">
        {showModal ? <LoginRegisterModal/> : ''}
        <Header/>
        <Main/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
