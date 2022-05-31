import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import ToDo from './pages/ToDo';
import Notes from './pages/Notes';
import Calendar from './pages/Calendar';
import ToggledarkMode from './components/ToggledarkMode';
import Home from './pages/Home';
import { useState } from 'react';
import Budget from './pages/Budget';
import Weather from './pages/Weather';
const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  return ( 
    <>
    <div className={`${darkMode && 'dark-mode'}`}>
    <ToggledarkMode handleToggleDarkMode={setDarkMode} />
  <BrowserRouter>
    <Navbar />
    <Routes>
    <Route exact path='/Home' element={<Home/>} />
      <Route exact path='/ToDo' element={<ToDo/>} />
      <Route exact path='/Notes' element={<Notes/>} />
      <Route exact path='/Calendar' element={<Calendar/>} />
      <Route exact path='/Weather' element={<Weather/>} />    
      <Route exact path='/Budget' element={<Budget/>} />
    </Routes>
  </BrowserRouter>
  </div>
  </>
  );
};

export default App;