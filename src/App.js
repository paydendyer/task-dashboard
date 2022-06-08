import React from 'react';
import {HashRouter, Routes, Route, Navigate} from 'react-router-dom';
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
      <div className={
        `${
          darkMode && 'dark-mode'
        }`
      }>
        <ToggledarkMode handleToggleDarkMode={setDarkMode}/>
        <HashRouter>
          <SideBar />
          <Routes>
            <Route exact path='/'
              element={<Home/>}/>
              <Route
        path="*"
        element={<Navigate to="/" replace />}
    />
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
      </div>
    </>
  );
};

export default App;
