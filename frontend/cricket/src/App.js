import './App.css';
import Login from './login';
import Head from './head';
import logo from './logo.jpeg'
function App() {
  return (
      <div className='app'>
        <div className='background-image' style={{
          backgroundImage:`url(${logo})`,
          backgroundPosition:'center',
          backgroundRepeat:'no-repeat',
          backgroundSize:'cover',
          opacity:0.8,
          }}></div>
            <Login/>
      </div>

)}
export default App;