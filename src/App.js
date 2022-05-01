import { useAuthState } from 'react-firebase-hooks/auth';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddNewPerfume from './components/AddNewPerfume/AddNewPerfume';
import Awards from './components/Awards/Awards';
import Blogs from './components/Blogs/Blogs';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import ManageItem from './components/ManageItem/ManageItem';
import MyItems from './components/MyItems/MyItems';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Signup from './components/Signup/Signup'
import auth from './firebase.init';

function App() {
  const [user] = useAuthState(auth)
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/awards' element={<Awards></Awards>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
        <Route path='/addperfume' element={<RequireAuth><AddNewPerfume></AddNewPerfume></RequireAuth>}></Route>
        <Route path='/inventory/:itemId' element={<RequireAuth><ManageItem></ManageItem></RequireAuth>}></Route>
        <Route path='/myitem' element={<RequireAuth><MyItems></MyItems></RequireAuth>}></Route>

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
