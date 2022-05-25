
import { Route, Routes } from 'react-router';
import './App.css';
import Home from './Pages/Home';
import Purchase from './Pages/Purchase';
import Navbar from './Pages/Shared/Navbar';


function App() {
  return (
    <div >
      <Navbar></Navbar>
       <Routes>
         <Route path="/" element ={<Home/>}/>
         <Route path="/purchase" element ={<Purchase/>}/>
       </Routes>
   
    </div>
  );
}

export default App;
