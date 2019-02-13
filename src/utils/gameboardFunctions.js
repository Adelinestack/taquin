import _ from 'lodash';

export const isBlankCellNear = (x, y, blankCell) => {
  const { blankCellPosX, blankCellPosY } = blankCell;
  return (
    (blankCellPosX === x && blankCellPosY === y + 1) ||
    (blankCellPosX === x && blankCellPosY === y - 1) ||
    (blankCellPosX === x + 1 && blankCellPosY === y) ||
    (blankCellPosX === x - 1 && blankCellPosY === y)
  );
};

export const newCurrentPos = (blankCell, currentPos, cellIndex) => {
  const newCellPos = {
    posX: blankCell.blankCellPosX,
    posY: blankCell.blankCellPosY,
  };
  const firstCurrentPos = currentPos.slice(0, cellIndex);
  const lastCurrentPos = currentPos.slice(cellIndex + 1);
  return [...firstCurrentPos, newCellPos, ...lastCurrentPos];
};

export const isWinner = (solution, currentPos) =>
  _.isEqual(solution, currentPos);
