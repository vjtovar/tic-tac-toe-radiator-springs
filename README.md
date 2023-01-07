# ❌ ⭕️ Tic Tac Toe

This is a web game for two players on one device, taking turns. You will have to use component state to keep track of whose turn it is and which squares have been marked by each player.

This project will challenge your knowledge of React but should also be an exercise in creating good user experiences. Your view should be styled to look good as well as function flawlessly.

### 📚 User Stories
- As a user, I can see a 3x3 grid game board on the page.
    - Branch: game-board
    - Created a container div inside App.js
    - mapped over the board squares to display 9 squares 
    - Applied css to center the game and wrapped the squares in 3x3 grid.

- As a user, I can click on a square to mark it.
    - Branch: mark-square
    - created clickHandler in App.js
    - create clickHandler in Square.js
    - Changed internal state to set to X when clicked
    
- As a user, my partner can click on a square after me and see their mark.
  - Branch: second-player
  - added 2nd conditional to check for 2nd player input and mark with a circle.
  
- As a user, I can't click on a square that has already been marked.
  - added conditional to only allow spaces to be changed if they are null
  
- As a user, when either my partner or I win the game (3 squares in a row: horizontally, vertically, or diagonally) I can see a notice telling me which player won.
  - created gameWon variable to store if game was won
  - created a gameWinner method to check for winning hand
  - setup alert to show winner
  - checked for winner after each turn in conditional

- As a user, I can't continue playing the game after the game has been won.
  - created conditional that will no longer allow for players to mark squares if winner has been alerted.
  
- As a user, if there are no more squares available, I can see a notice telling me that the game has ended.
  - Branch: stale-mate
  - Created staleMate method and added to gamePlay method
  
- As a user, I can click on a restart button that will clear the game board.

### 🏔 Stretch Goals
- As a user, I can see a notification that informs me whether it is currently my partner or my turn.
- As a user, I can choose my marker from a predetermined list (X, O, a color, an emoji, etc...).

### 🛠 Resources
- [Tic Tac Toe](https://en.wikipedia.org/wiki/Tic-tac-toe)
- [Tic Tac Toe win condition in React](https://forum.freecodecamp.org/t/need-help-understanding-react-tic-tac-toe-winner-function/137840)

![portfolio2](https://user-images.githubusercontent.com/104322947/211173274-e0d37469-d08f-4375-8af2-23a861fe5783.jpg)

