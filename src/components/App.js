import React, { Component } from 'react';
import Gameboard from './Gameboard';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>TAQUIN</h1>
        </header>
        <main>
          <Gameboard />
        </main>
      </div>
    );
  }
}

export default App;
