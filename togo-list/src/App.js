import './App.css';
import { Route, Routes } from 'react-router-dom';
import AddContact from './pages/AddContact';
import Home from './pages/Home';
import Layout from './components/Layout';
import View from './components/View';


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path={"/"} element={<Layout />} >
            <Route index path={"/"} element={<Home />} />
            <Route path={"/AddContact"} element={<AddContact />} />
            <Route path={"/update/:id"} element={<AddContact />} />
            <Route path={"/view/:id"} element={<View/>} />
          </Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
