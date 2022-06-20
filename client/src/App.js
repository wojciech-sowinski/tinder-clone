import './styles/app.scss'
import Header from './layout/Header';
import Main from './layout/Main';
import Footer from './layout/Footer';
import LoginRegisterModal from './components/LoginRegisterModal';


import { useSelector, useDispatch } from 'react-redux'

function App() {

  const {showModal,formType} = useSelector(state=>state.modalReducer)

  return (
   
      <div className="App">
        {showModal ? <LoginRegisterModal/> : ''}
        <Header/>
        <Main/>
        <Footer/>
      </div>
    
  );
}

export default App;
