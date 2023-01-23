import './App.css';
import Home from './pages/Home';
import Food from './pages/Food';
import Buy from './pages/Buy';
import Blog from './pages/Blog';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import Contact from './pages/Contact';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/food' element={<Food/>}></Route>
        <Route path='/buy' element={<Buy/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
