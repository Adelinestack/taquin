import React, { PureComponent } from 'react';
import { solution, blankCellOrigine } from '../utils/constantes';
import {
  isBlankCellNear,
  newCurrentPos,
  isWinner,
} from '../utils/gameboardFunctions';
import _ from 'lodash';
import { Cell } from '../stylized/cellStyle';
import { Grid } from '../stylized/gameboardStyle';

export default class Gameboard extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentPos: _.shuffle(solution),
      blankCell: blankCellOrigine,
    };
  }

  onCellClick(posX, posY, cellIndex) {
    const { currentPos, blankCell } = this.state;

    if (isBlankCellNear(posX, posY, blankCell)) {
      this.setState(prevState => {
        return {
          currentPos: newCurrentPos(
            prevState.blankCell,
            prevState.currentPos,
            cellIndex
          ),
          blankCell: { blankCellPosX: posX, blankCellPosY: posY },
        };
      });

      if (isWinner(solution, currentPos)) {
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
        onClick={this.onCellClick.bind(
          this,
          currentPos[index].posX,
          currentPos[index].posY,
          index
        )}
        key={`${cell.posX}-${cell.posY}`}
      />
    ));
    return <Grid>{grid}</Grid>;
  }
}
