export const UNIT = 15
export const BOARD_SIZE = 600
export const PLAYER_ONE ={
    color: "#CC0000",
    id: "1",
    keys:{
        38: 'up',
        39: 'right',
        40: 'down',
        37: 'left'
    },
    direccion: 'right',
    position : {x: UNIT * 6, y: UNIT * 6}
}
export const PLAYER_TWO ={
    color: "#0000cc",
    id: "2",
    keys:{
        87: 'up',
        68: 'right',
        83: 'down',
        65: 'left'
    },
    direccion: 'left',
    position : {x: UNIT * 35, y: UNIT * 35}
}
