import React, { PureComponent } from 'react';
import Cell from './Cell';
import './gameboard.css';
import { solution, blankCellOrigine } from '../utils/constantes';
import {
  isBlankCellNear,
  newCurrentPos,
  isWinner,
} from '../utils/gameboardFunctions';
import _ from 'lodash';

export default class Gameboard extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentPos: _.shuffle(solution),
      blankCell: blankCellOrigine,
    };
  }

  onClick(x, y, cellIndex) {
    const { currentPos, blankCell } = this.state;

    if (isBlankCellNear(x, y, blankCell)) {
      this.setState({
        currentPos: newCurrentPos(blankCell, currentPos, cellIndex),
        blankCell: { blankCellPosX: x, blankCellPosY: y },
      });

      if (isWinner(solution, this.state.currentPos)) {
        this.props.endGame();
      }
    }
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
