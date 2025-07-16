// import { useState } from 'react'
import './App.css'
import Homepage from './components/Homepage'
import Navbar from './components/Navbar'
import Roadmap from './components/Roadmap'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {

  return (
    <>
     <Router>

      <Navbar/>
      <Homepage/>
      <Roadmap/>

      </Router>
    </>
  )
}

export default App