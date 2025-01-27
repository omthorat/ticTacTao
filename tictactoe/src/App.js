import logo from "./logo.svg";
import "./App.css";
import TicTacToe from "./components/TicTacToe";
import Throtled from "./components/throtle/Throtled";

function App() {
  return (
    <div className="App">
      <Throtled />
      <h2> Welcome to Tic Tac Toe Fun Game</h2>
      <TicTacToe />
    </div>
  );
}

export default App;
