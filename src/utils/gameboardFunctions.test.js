import { isBlankCellNear, newCurrentPos } from './gameboardFunctions';

describe('Test isBlankCellNear', () => {
  test(`x=1, y=2 et blankCell= {blankCellPosX: 1,blankCellPosY: 1} return true`, () => {
    expect(
      isBlankCellNear(1, 2, { blankCellPosX: 1, blankCellPosY: 1 })
    ).toBeTruthy();
  });

  test(`x=1, y=2 et blankCell= {blankCellPosX: 0, blankCellPosY: 1} return false`, () => {
    expect(
      isBlankCellNear(1, 2, { blankCellPosX: 0, blankCellPosY: 1 })
    ).toBeFalsy();
  });
});

describe('Test newCurrentPos', () => {
  const blankCell = { blankCellPosX: 0, blankCellPosY: 1 };
  const currentPos = [
    { posX: 0, posY: 0 },
    { posX: 0, posY: 2 },
    { posX: 0, posY: 3 },
  ];
  const cellIndex = 0;

  const newPos = [
    { posX: 0, posY: 1 },
    { posX: 0, posY: 2 },
    { posX: 0, posY: 3 },
  ];

  test(`blankCell, currentPos, cellIndex return newPos`, () => {
    expect(newCurrentPos(blankCell, currentPos, cellIndex)).toEqual(newPos);
  });
});
