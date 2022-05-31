import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      squares: [null, null, null, null, null, null, null, null, null],
      turn: 1
    }
  }

  handleGamePlay = (index) => {
    const { squares, turn } = this.state
    if(squares[index] === null && turn % 2 !== 0) {
      squares[index] = "X"
      this.setState({squares: squares, turn: turn+1})
    } else if(squares[index] === null && turn % 2 === 0) {
      squares[index] = "O"
      this.setState({squares: squares, turn: turn+1})
    }
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
      </>
    )
  }
}
export default App
