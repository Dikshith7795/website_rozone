import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
//import "./styles.css"
function App() {
  return (
    <Router>
      <Navbar/>
    </Router>
  );
}

export default App;
