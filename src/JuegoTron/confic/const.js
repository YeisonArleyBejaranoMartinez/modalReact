export const UNIT = 15;
export const BOARD_SIZE = 600;
export const DIRECTIONS = {
  left: { x: -UNIT, y: 0 },
  right: { x: UNIT, y: 0 },
  up: { x: 0, y: -UNIT },
  down: { x: 0, y: UNIT },
};
export const PLAYER_ONE = {
  color: "#CC0000",
  id: "1",
  keys: {
    38: DIRECTIONS.up,
    39: DIRECTIONS.right,
    40: DIRECTIONS.down,
    37: DIRECTIONS.left,
  },
  direccion: DIRECTIONS.right,
  position: { x: UNIT * 6, y: UNIT * 6 },
};
export const PLAYER_TWO = {
  color: "#0000cc",
  id: "2",
  keys: {
    87: DIRECTIONS.up,
    68: DIRECTIONS.right,
    83: DIRECTIONS.down,
    65: DIRECTIONS.left,
  },
  direccion: DIRECTIONS.left,
  position: { x: UNIT * 35, y: UNIT * 35 },
};
