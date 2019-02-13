import React, { PureComponent } from 'react';
import Gameboard from './Gameboard';
import EndGame from './EndGame';
import { PLAY, END } from '../utils/constantes';
import './App.css';

export default class App extends PureComponent {
  state = { gameState: PLAY };

  playGame = () => {
    this.setState({
      gameState: PLAY,
    });
  };
  endGame = () => {
    this.setState({
      gameState: END,
    });
  };

  render() {
    const gameStateComponents = {
      PLAY: <Gameboard endGame={this.endGame.bind(this)} />,
      END: <EndGame playGame={this.playGame.bind(this)} />,
    };
    return (
      <div className="App">
        <header className="App-header">
          <h1>TAQUIN</h1>
        </header>
        <main>
          <div className="App">{gameStateComponents[this.state.gameState]}</div>
        </main>
      </div>
    );
  }
}
