import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      squares: [null, null, null, null, null, null, null, null, null],
      turn: 1,
      gameWon: false,
    }
  }

  gameWinner= (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        if(this.state.turn % 2 === 0) {
          alert(`Player O Wins`)
        } else {
          alert(`Player X Wins`)
        }
        this.setState({gameWon: true});
      }
    }
    return null;
  }

  staleMate= () => {
    const { turn, gameWon } = this.state
    if(turn === 9 && gameWon === false){
      alert('Stale Mate')
    }
  }

  handleGamePlay = (index) => {
    const { squares, turn, gameWon } = this.state
    if(gameWon !== true){
      if(squares[index] === null && turn % 2 !== 0) {
        squares[index] = "X"
        this.gameWinner(squares)
        this.staleMate()
        this.setState({squares: squares, turn: turn+1})
      } else if(squares[index] === null && turn % 2 === 0) {
        squares[index] = "O"
        this.gameWinner(squares)
        this.staleMate()
        this.setState({squares: squares, turn: turn+1})
      }
    } 
  }

  reset = () => {
    this.setState({ 
      squares: [null, null, null, null, null, null, null, null, null],
      turn: 1,
      gameWon: false,
    })
  }

  render() {
    return(
      <>
        <h1>Tic Tac Toe</h1>
        <div className= "game-board">
          {this.state.squares.map((value, index) => {
            return (
              <Square 
              value={value}
              index={index}
              key={index}
              handleGamePlay={this.handleGamePlay}
              />
            )
          })}
          </div>
          <button onClick={this.reset}>
            Play Again
          </button>
      </>
    )
  }
}
export default App
