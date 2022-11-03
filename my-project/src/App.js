import './App.css';
import {Routes, Route} from 'react-router-dom';
import Login from './component/Login';
import Register from './component/Register';
import Home from './component/Home';
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Routes>
          <Route path={'/'} element={<Home/>}/>
           <Route path={'/Register'} element={<Register/>}/>
           <Route path={'/Login'} element={<Login/>}/>
       </Routes>
      </header>
    </div>
  );
}

export default App;
