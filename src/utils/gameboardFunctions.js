import _ from 'lodash';
import { LEVEL } from './constantes';

export const isBlankCellNear = (x, y, blankCell) => {
  const { blankCellPosX, blankCellPosY } = blankCell;
  return (
    (blankCellPosX === x && blankCellPosY === y + 1) ||
    (blankCellPosX === x && blankCellPosY === y - 1) ||
    (blankCellPosX === x + 1 && blankCellPosY === y) ||
    (blankCellPosX === x - 1 && blankCellPosY === y)
  );
};

export const newCurrentPos = (
  { blankCellPosX, blankCellPosY },
  currentPos,
  cellIndex
) => {
  const newCellPos = {
    posX: blankCellPosX,
    posY: blankCellPosY,
  };
  const firstCurrentPos = currentPos.slice(0, cellIndex);
  const lastCurrentPos = currentPos.slice(cellIndex + 1);
  return [...firstCurrentPos, newCellPos, ...lastCurrentPos];
};

export const isWinner = (solution, currentPos) =>
  _.isEqual(solution, currentPos);

export const column = (level, row, col = 0, cols = []) => {
  if (col === level - 1) {
    return [
      ...cols,
      {
        posX: row,
        posY: col,
      },
    ];
  } else if (row === 1 && col == 1) {
    return column(level, row, col + 1, cols);
  }
  return column(level, row, col + 1, [
    ...cols,
    {
      posX: row,
      posY: col,
    },
  ]);
};

export const createSolution = (level, row = 0, rows = []) => {
  if (row === level - 1) {
    return [...rows, ...column(level, row)];
  }
  return createSolution(level, row + 1, [...rows, ...column(level, row)]);
};

export const SOLUTIONS = createSolution(LEVEL);
