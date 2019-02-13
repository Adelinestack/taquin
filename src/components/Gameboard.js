import React, { Component } from 'react';
import Cell from './Cell';
import './gameboard.css';
import { solution } from '../utils/constantes';
import _ from 'lodash';

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

      const firstCurrentPos = currentPos.slice(0, cellIndex);
      const lastCurrentPos = currentPos.slice(cellIndex + 1);
      const newCurrentPos = [...firstCurrentPos, newCellPos, ...lastCurrentPos];

      this.setState({
        currentPos: newCurrentPos,
        blankCell: { blankCellPosX: x, blankCellPosY: y },
      });

      if (this.isWinner()) {
        this.props.endGame();
      }
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
        key={`${cell.posX}-${cell.posY}`}
      />
    ));
    return <div className="grid">{grid}</div>;
  }
}

export default Gameboard;
