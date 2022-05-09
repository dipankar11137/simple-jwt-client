
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Orders from './components/Orders/Orders';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/orders' element={<Orders></Orders>} />
        <Route path='/about' element={<About></About>} />
        <Route path='/login' element={<Login></Login>} />
      </Routes>

    </div>
  );
}

export default App;
