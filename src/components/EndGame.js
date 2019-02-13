import React, { memo } from 'react';

const EndGame = () => (
  <div>
    <p>You win !</p>
    <button onClick={this.props.playGame}>Play again</button>
  </div>
);

export default memo(EndGame);
