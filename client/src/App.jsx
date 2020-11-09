// general imports
import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

// components


// pages
import Home from './pages/Home';
import About from './pages/About';


function App() {
  return (
    <Router>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      {/*<Route exact path="/portfolio" component={portfolio}/>*/}
      {/*<Route exact path="/research" component={research}/>*/}
      {/*<Route exact path="/contact" component={contact}/>*/}
    </Router>
  );
}

export default App;
