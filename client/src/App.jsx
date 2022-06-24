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
import {
  useEffect,
  useState
} from 'react';


import {
  useSelector,
  useDispatch
} from 'react-redux'

function App() {

  const {
    showModal,
    formType
  } = useSelector(state => state.modalReducer)
  const {
    userData,
    logged
  } = useSelector(state => state.userData)
  const newMessages = useSelector(state => state.newMessages)
  const messages = useSelector(state => state.messages)
  const [newMessagesPrev, setNewMessagePrev] = useState(0)
  const dispatch = useDispatch()

  useEffect(() => {

    console.log('useeffect from app');

    dispatch({
      type: 'isLogged'
    })
    dispatch({
      type: 'fetchUsersCatalog'
    })
    dispatch({
      type: 'fetchNewMessageCount'
    })
    dispatch({
      type: 'fetchMessages'
    })

    const appInterval =setInterval(() => {

      if(logged){
        dispatch({
          type: 'fetchNewMessageCount'
        })
      }

      
    }, 3000);
    
    return ()=>{
      clearInterval(appInterval)
    }

  }, [logged,newMessages])

  return ( 
  <Router>
    <div className = "App" > {
      showModal ? < LoginRegisterModal /> : ''
    } <Header/>
    <Main/>
    <Footer />
    </div> 
  </Router>
  );
}

export default App;