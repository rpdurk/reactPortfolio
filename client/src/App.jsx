// general imports
import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// components


// pages
import Home from './pages/Home';
import About from './pages/About';
// import Portfolio from './pages/Portfolio';
import Research from './pages/Research';
// import Contact from './pages/Contact';


function App() {
  return (
    <Router>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      {/*<Route exact path="/portfolio" component={Portfolio}/>*/}
      <Route exact path="/research" component={Research}/>
      {/*<Route exact path="/contact" component={ontact}/>*/}
    </Router>
  );
}

export default App;
