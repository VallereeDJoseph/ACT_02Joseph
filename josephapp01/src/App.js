// import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import ListGroup from './components/listGroup';
import Main from './components/main';
import Cards from './components/card';

function App() {
  return (
    <div className="container-fluid">
      <Navbar/>
      <br></br>
      <div className='row mb-5'>
        <div className='col-sm-5 col-md-4' ><ListGroup/></div>
        <div className='col-sm-5 col-md-8'>
        <Main/></div>
      </div>
      
      <Cards/>
    </div>
  );
}

export default App;
