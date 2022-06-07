import React from 'react';
import {HashRouter, Routes, Route} from 'react-router-dom';
import ToDo from './pages/ToDo';
import Notes from './pages/Notes';
import ToggledarkMode from './components/ToggledarkMode';
import Home from './pages/Home';
import {useState} from 'react';
import Budget from './pages/Budget';
import Weather from './pages/Weather';
import "./css/output.css";
import SideBar from './components/SideBar';
const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <HashRouter>
        <div className={
          `${
            darkMode && 'dark-mode'
          }`
        }>
          <ToggledarkMode handleToggleDarkMode={setDarkMode}/>
        </div>
        <SideBar/>
        <Routes>
          <Route exact path='/Home'
            element={<Home/>}/>
          <Route exact path='/ToDo'
            element={<ToDo/>}/>
          <Route exact path='/Notes'
            element={<Notes/>}/>
          <Route exact path='/Weather'
            element={<Weather/>}/>
          <Route exact path='/Budget'
            element={<Budget/>}/>
        </Routes>
      </HashRouter>
    </>
  );
};

export default App;
