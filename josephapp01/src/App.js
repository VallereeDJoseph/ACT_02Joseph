// import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import ListGroup from './components/listGroup';
import Main from './components/main';
import Cards from './components/card';
import UseContext from './Pages/useContext';
import UseRef from './Pages/useRef';
import UseEffect from './Pages/useEffect';
import UseCallBack from './Pages/useCallback';
import UseMemo from './Pages/useMemo';
import UseReducer from './Pages/useReducer';

function App() {
  return (
    <div className="container-fluid">
      <Navbar/>
      <UseContext />
      <UseRef />
      <UseEffect />
      <UseCallBack />
      <UseMemo />
      <UseReducer />

      <br></br>
      <div className='row justify-content-md-center'>
        <div className='col-sm-5 col-md-3' ><ListGroup/></div>
        <div className='col-md-auto '><Main/></div>
        <Cards/>

      </div>
    </div>
  );
}

export default App;
