import logo from "./logo.svg";
import "./App.css";
import TicTacToe from "./components/TicTacToe";
import Throtled from "./components/throtle/Throtled";
import ProgressBar from "./components/progress/ProgressBar";
import { useEffect, useState } from "react";
import GridLight from "./components/gridLight/GridLight";
import Employee from "./components/employeeManagement/Employee";


function App() {
  const [value,SetValue]=useState(0)

  // useEffect(()=>{
  //   setInterval(()=>{
  //     SetValue((val)=>val+1)
  //   },100)
  // },[])
  return (
    <div className="App">
      <Throtled />
      <Employee/>
      <GridLight/>
      {/* <ProgressBar value={value}/> */}
      <h2> Welcome to Tic Tac Toe Fun Game</h2>
      <TicTacToe />
      
    </div>
  );
}

export default App;
