import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Addblog from './Components/Addblog';
import View from './Components/View';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path='/H' element={<Home/>}/>
      <Route path='/A' element={<Addblog/>}/>
      <Route path='/V' element={<View/>}/>

      </Routes>
    

      
    </div>
  );
}

export default App;
