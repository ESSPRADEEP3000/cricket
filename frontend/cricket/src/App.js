import './App.css';
import Login from './login';
import Head from './head.js';
import logo from './logo.jpeg'
import Home from './home';
import Live from './pages.js/live.js';
import Match from './pages.js/match.js';
import Table from './pages.js/table.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
      <div className='app'>
        <div className='app-header' style={{
          backgroundImage:`url(${logo})`,
          backgroundPosition:'center',
          backgroundRepeat:'no-repeat',
          backgroundSize:'cover',
          opacity:0.8,
          height:"105%",
          width:"100%",
          position:"fixed"
          }}>
            <Head/>
            <BrowserRouter>
            <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/live" element={<Live/>}/>
            <Route path="/matches" element={<Match/>}/>
            <Route path="/table" element={<Table/>}/>
            </Routes>
            </BrowserRouter>
            <Login/>
          </div>
      </div>
)}
export default App;