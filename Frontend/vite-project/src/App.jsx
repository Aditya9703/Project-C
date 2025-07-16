// import { useState } from 'react'
import "./App.css";
import Homepage from "./components/Homepage";
import Instructor from "./components/Instructor";
import Navbar from "./components/Navbar";
import Roadmap from "./components/Roadmap";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Homepage />
        <Instructor />
        <Roadmap />
      </Router>
    </>
  );
}

export default App;
