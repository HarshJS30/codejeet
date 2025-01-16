import React from "react";
import CurrencyConverter from "./components/CurrencyConverter";
import './App.css'
import Navbar from "./components/Navbar";
import QuizApp from "./components/Quiz";

function App(){
  return (
    <>
      <div className="main-content">
        < Navbar /> 
        < CurrencyConverter />
      </div>
      <div className="second-content">
        <QuizApp />
      </div>
    </>
  )
}

export default App;
