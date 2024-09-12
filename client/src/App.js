// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home/home'
import Add from './components/Add_Edit/Add'
import Edit from './components/Add_Edit/Edit'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add' element={<Add />} />
        <Route path='/edit' element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
