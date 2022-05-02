import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import ToDo from './pages/ToDo';
import Notes from './pages/Notes';
import Calendar from './pages/Calendar';
const App = () => {
  
  return ( 
    <>
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route exact path='/ToDo' element={<ToDo/>} />
      <Route exact path='/Notes' element={<Notes/>} />
      <Route exact path='/Calendar' element={<Calendar/>} />
    </Routes>
  </BrowserRouter>
  </>
  );
};

export default App;