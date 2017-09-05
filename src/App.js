import React, { Component } from 'react';
import './App.css';
const playerArr = {
  "players": [
    {"name": "Player 1"},
    {"name": "Player 2"},
    {"name": "Player 3"},
    {"name": "Player 3"}
  ]
}

class App extends Component {
  constructor () {
    super();
    this.state = playerArr;
  }
  render() {
      const players = this.state.players.map(function(player, i){
        return (
          <player
            value={player}
           key={i} />
        );
      }, this);
      return (
        <div className="App">
          <div className="App-header">
            <h2>Choose Your Team!</h2>
          </div>
          <span className="unassigned" >
            <h2>Team Players:</h2>
            <h3>unassigned</h3>
            <li className="players">
              {player}
            </li>
          </span>
          <span className="teamA" >
          <h2>Team A:</h2>
          </span>
          <span className="teamB" >
            <h2>Team B:</h2>
          </span>
        </div>
      );
    }
  }
export default App;
