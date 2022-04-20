import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ToDo from './pages/ToDo';
import Notes from './pages/Notes';
const App = () => {

  return ( 
    <>
  <Router>
    <Navbar />
    <Switch>
      <Route path='/ToDo' exact component={ToDo} />
      <Route path='/Notes' exact component={Notes} />
    </Switch>
  </Router>
  </>
  );
};

export default App;