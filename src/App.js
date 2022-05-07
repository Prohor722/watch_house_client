import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Header from './components/Shared/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
import Register from './components/Register/Register';
import Login from './components/Login/Login'

function App() {
  return (
    <div className="App">
      <Header/>
      <h1>hello</h1>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/blog" element={<Blog/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
