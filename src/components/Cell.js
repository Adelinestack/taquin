import React, { Component } from 'react';
import './cell.css';

class Cell extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      currentPos: { posX, posY },
      realPos: { posX: realPosX, posY: realPosY },
    } = this.props;
    const cellStyle = {
      backgroundPosition: `${realPosY * -100}px ${realPosX * -100}px`,
      top: `${posX * 100}px`,
      left: `${posY * 100}px`,
    };

    return (
      <div style={cellStyle} className="cell" onClick={this.props.onClick} />
    );
  }
}

export default Cell;
