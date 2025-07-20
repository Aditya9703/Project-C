// import { useState } from 'react'
import "./App.css";
import Career from "./components/Career";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import Instructor from "./components/Instructor";
import Navbar from "./components/Navbar";
import Roadmap from "./components/Roadmap";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Work from "./components/Work";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Hero/>
        <Homepage />
        <Instructor />
        <Work/>
        <Roadmap />
        <Career/>
        <FAQ/>
        <Footer/>

      </Router>
    </>
  );
}

export default App;
