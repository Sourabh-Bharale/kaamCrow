import React from 'react';
import { BrowserRouter as Router,Routes,route, Route } from 'react-router-dom';
import './App.css';
import { Login , HomePage } from './components';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/homepage' element={<HomePage/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
