import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Header from './components/Shared/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
import Register from './components/Register/Register';
import Login from './components/Login/Login'
import ManageInventories from './components/ManageInventories/ManageInventories'
import MyItems from './components/Myitems/Myitems'
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Shared/Footer';
import ResetPassword from './components/ResetPassword/ResetPassword';
import RequireAuth from './components/RequireAuth/RequireAuth';
import AddProduct from './components/AddProduct/AddProduct';
import ProductDetails from './components/ProductDetails/ProductDetails';
import CustomerReview from './components/CustomerReview/CustomerReview';
import Loading from './components/Shared/Loading';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/blog" element={<Blog/>}></Route>
        <Route path="/review" element={<CustomerReview/>}></Route>
        <Route path="/manageInventories" element={
          <RequireAuth>
            <ManageInventories/>
          </RequireAuth>
        }></Route>
        <Route path="/myItems" element={
          <RequireAuth>
            <MyItems/>
          </RequireAuth>
        }></Route>
        <Route path="/addProduct" element={
          <RequireAuth>
            <AddProduct/>
          </RequireAuth>
        }></Route>
        <Route path="/product/:id" element={
          <RequireAuth>
            <ProductDetails/>
          </RequireAuth>
        }></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/resetPassword" element={<ResetPassword/>}></Route>
        <Route path="/loading" element={<Loading/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
