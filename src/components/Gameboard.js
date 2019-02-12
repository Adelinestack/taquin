import React, { Component } from 'react';
import Cell from './Cell';
import './gameboard.css';
import _ from 'lodash';

const solution = [
  { posX: 0, posY: 0 },
  { posX: 0, posY: 1 },
  { posX: 0, posY: 2 },
  //{ posX: 0, posY: 3 },
  { posX: 1, posY: 0 },
  { posX: 1, posY: 2 },
  //{ posX: 1, posY: 3 },
  { posX: 2, posY: 0 },
  { posX: 2, posY: 1 },
  { posX: 2, posY: 2 },
  //{ posX: 2, posY: 3 },
  //   { posX: 3, posY: 0 },
  //   { posX: 3, posY: 1 },
  //   { posX: 3, posY: 2 },
  //   { posX: 3, posY: 3 },
];
const blankCellOrigine = { blankCellPosX: 1, blankCellPosY: 1 };

class Gameboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPos: _.shuffle(solution),
      blankCell: blankCellOrigine,
    };
  }

  onClick(x, y, cellIndex) {
    const { currentPos, blankCell } = this.state;

    if (this.isBlankCellNear(x, y, blankCell)) {
      const newCellPos = {
        posX: blankCell.blankCellPosX,
        posY: blankCell.blankCellPosY,
      };
      const newCurrentPos = currentPos;
      newCurrentPos[cellIndex] = newCellPos;

      this.setState({
        currentPos: newCurrentPos,
        blankCell: { blankCellPosX: x, blankCellPosY: y },
      });

      console.log(this.isWinner());
    }
  }

  isWinner() {
    return _.isEqual(solution, this.state.currentPos);
  }

  isBlankCellNear(x, y, blankCell) {
    const { blankCellPosX, blankCellPosY } = blankCell;
    return (
      (blankCellPosX === x && blankCellPosY === y + 1) ||
      (blankCellPosX === x && blankCellPosY === y - 1) ||
      (blankCellPosX === x + 1 && blankCellPosY === y) ||
      (blankCellPosX === x - 1 && blankCellPosY === y)
    );
  }

  render() {
    const { currentPos } = this.state;
    const grid = solution.map((cell, index) => (
      <Cell
        currentPos={{
          posX: currentPos[index].posX,
          posY: currentPos[index].posY,
        }}
        realPos={{ posX: cell.posX, posY: cell.posY }}
        onClick={this.onClick.bind(
          this,
          currentPos[index].posX,
          currentPos[index].posY,
          index
        )}
      />
    ));
    return <div className="grid">{grid}</div>;
  }
}

export default Gameboard;
