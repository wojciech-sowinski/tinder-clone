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
import { fetchMessages, fetchNewMessageCount } from './actions/messagesActions'
import { fetchUsersCatalog } from './actions/usersActions';
import { isLogged } from './actions/userActions'


function App() {

  const {
    showModal,
    formType
  } = useSelector(state => state.modalReducer)
  const {
    userData,
    logged
  } = useSelector(state => state.userData)
  const isLoading = useSelector(state => state.loaderReducer)
  const newMessages = useSelector(state => state.newMessages)
  const { messages, loading } = useSelector(state => state.messages)
  const [newMessagesPrev, setNewMessagePrev] = useState(0)
  const dispatch = useDispatch()

  useEffect(() => {

    dispatch(isLogged())

    dispatch(fetchUsersCatalog())
    dispatch(fetchNewMessageCount())

    dispatch(fetchMessages(messages))


    const appInterval = setInterval(() => {

      if (logged) {

        dispatch(fetchNewMessageCount())
      }


    }, 3000);

    return () => {
      clearInterval(appInterval)
    }



  }, [logged, newMessages])

  return (
    <Router>

      <div className="App" >
        {
          showModal && < LoginRegisterModal />
        } <Header />
        <Main />
        <Footer />
      </div>
    </Router>
  );
}

export default App;