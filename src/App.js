
import { Route, Routes } from 'react-router';
import './App.css';
import Home from './Pages/Home';
import Purchase from './Pages/Purchase';
import Footer from './Pages/Shared/Footer';
import Login from './Pages/Shared/Login/Login';
import RequireAuth from './Pages/Shared/Login/RequireAuth';
import Navbar from './Pages/Shared/Navbar';
import SignUp from './Pages/Shared/Login/SignUp';
import Blogs from './Pages/Blogs';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Dashboard from './Pages/DashBoard/Dashboard';
import MyProfile from './Pages/DashBoard/MyProfile';
import MyOrders from './Pages/DashBoard/MyOrders';
import AddReview from './Pages/DashBoard/AddReview';
import MyPortfolio from './Pages/MyPortfolio';
import NotFound from './Pages/NotFound';
import Users from './Pages/DashBoard/Users';
import ManageProducts from './Pages/DashBoard/ManageProduct';
import ManageAllOrders from './Pages/DashBoard/ManageAllOrders';


function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>} />
        <Route path="/portfolio" element={<MyPortfolio></MyPortfolio>} />
        <Route path='/purchase/:id' element={<RequireAuth><Purchase></Purchase></RequireAuth>}></Route>
        <Route path='/dashboard' element={<RequireAuth><Dashboard /></RequireAuth>}>
          <Route index element={<MyProfile />}></Route>
          <Route path='myOrders' element={<MyOrders />}></Route>
          <Route path='addReview' element={<AddReview />}></Route>
          <Route path='makeAdmin' element={<Users/>}></Route>
          <Route path='manageProduct' element={<ManageProducts/>}></Route>
          <Route path='manageAllOrders' element={<ManageAllOrders/>}></Route>
        </Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
