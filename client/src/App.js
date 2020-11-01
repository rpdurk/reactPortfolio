// general imports
import React from 'react';
import './App.css';

// components


// pages



function App() {
  return (
    <Router>
      <Route exact path="/" component={Home}/>
      <Route exact path="about" component={about}/>
      <Route exact path="portfolio" component={portfolio}/>
      <Route exact path="research" component={research}/>
      <Route exact path="contact" component={contact}/>
    </Router>
  );
}

export default App;
