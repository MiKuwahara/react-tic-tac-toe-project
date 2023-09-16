
/*
import logo from './logo.svg';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

*/

import './App.css';
import {useState} from "react";

// Omitting 'export' means Square is
// ONLY available on this file.
function Square({value, onSquareClick}){

  return  (<button 
            className="square"
            onClick={onSquareClick}>
            {value}
          </button>);
}


export default function Board() {

  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i){

    if(squares[i] || calculateWinner(squares)){
      return;
    }
    // create a copy of the squares array
    const nextSquares = squares.slice();
    if(xIsNext){
      nextSquares[i] = "X";
    }else{
      nextSquares[i] = "O";
    }
    
    // re-render the components
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }
    
  const winner = calculateWinner(squares);
  let status;
  if(winner){
    status = "Winner: " + winner;
  }else{
    status = "Next player: "+ (xIsNext ? "X" : "O");
  }
  

  return (
    <>
      <div className="status">{status}</div>
      <div className='board-row'>
        <Square value={squares[0]} onSquareClick={() => {handleClick(0)}}/>
        <Square value={squares[1]} onSquareClick={() => {handleClick(1)}}/>
        <Square value={squares[2]} onSquareClick={() => {handleClick(2)}}/>
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => {handleClick(3)}}/>
        <Square value={squares[4]} onSquareClick={() => {handleClick(4)}}/>
        <Square value={squares[5]} onSquareClick={() => {handleClick(5)}}/>
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => {handleClick(6)}}/>
        <Square value={squares[7]} onSquareClick={() => {handleClick(7)}}/>
        <Square value={squares[8]} onSquareClick={() => {handleClick(8)}}/>
      </div>

    </>
  );
}

function calculateWinner(squares){
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  /*
  lines.forEach(([a,b,c], index) => {
    console.log(a);
    console.log(b);
    console.log(c);
    if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
      return squares[a];
    }
  });
  */
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  
  return null;
}
