import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      squares: [null, null, null, null, null, null, null, null, null]
    }
  }

  render() {
    return(
      <>
        <h1>Tic Tac Toe</h1>
        <div className= "game-board">
          {this.state.squares.map((value, index) => {
            return (
              <Square/>
            )
          })}
          </div>
      </>
    )
  }
}
export default App
