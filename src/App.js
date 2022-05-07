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

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/blog" element={<Blog/>}></Route>
        <Route path="/manageInventories" element={<ManageInventories/>}></Route>
        <Route path="/myItems" element={<MyItems/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
