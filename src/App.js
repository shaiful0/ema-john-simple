import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import Header from './component/Header/Header';
import Inventory from './component/Inventory/Inventory';
import Login from './component/Login/Login';
import Orders from './component/Orders/Orders';
import Shop from './component/Shop/Shop';
import SignUp from './component/SignUp/SignUp';

function App() {
  return (
    <div>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Shop></Shop>}></Route>
          <Route path='/shop' element={<Shop></Shop>}></Route>
          <Route path='/orders' element={<Orders></Orders>}></Route>
          <Route path='/inventory' element={<Inventory></Inventory>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/signup' element={<SignUp></SignUp>}></Route>
        </Routes>
    </div>
  );
}

export default App;
