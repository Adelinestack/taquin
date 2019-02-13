import React, { Component } from 'react';

export default class EndGame extends Component {
  render() {
    return (
      <div>
        <p>You win !</p>
        <button onClick={this.props.playGame}>Play again</button>
      </div>
    );
  }
}
