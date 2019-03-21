import React, { PureComponent } from 'react';
import Gameboard from './Gameboard';
import EndGame from './EndGame';
import { PLAY, END } from '../utils/constantes';
import { Main, Appcontainer } from '../stylized/appStyle';

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
      <Appcontainer>
        <header className="App-header">
          <h1>TAQUIN</h1>
        </header>
        <Main>
          <div className="App">{gameStateComponents[this.state.gameState]}</div>
        </Main>
      </Appcontainer>
    );
  }
}
