import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import ToDo from './pages/ToDo';
import Notes from './pages/Notes';
import Calendar from './pages/Calendar';
import Header from './components/Header';
import { useState } from 'react';
const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  return ( 
    <>
    <div className={`${darkMode && 'dark-mode'}`}>
    <Header handleToggleDarkMode={setDarkMode} />
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route exact path='/ToDo' element={<ToDo/>} />
      <Route exact path='/Notes' element={<Notes/>} />
      <Route exact path='/Calendar' element={<Calendar/>} />
    </Routes>
  </BrowserRouter>
  </div>
  </>
  );
};

export default App;