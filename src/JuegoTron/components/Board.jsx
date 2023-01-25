import { useRef, useEffect } from 'react'
import css from '../styles/juegoTron.module.css'
import {UNIT, BOARD_SIZE} from '../confic/const.js'
const Board = ({players}) => {
    const canvasRef = useRef()
    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        context.beginPath();
        context.strokeStyle = "#001900";
        for (let i = UNIT * 2;  i <= BOARD_SIZE; i += UNIT * 2) {
            context.moveTo(i, 0);
            context.lineTo(i, BOARD_SIZE)
        }
        for (let i = UNIT * 2;  i <= BOARD_SIZE; i += UNIT * 2) {
            context.moveTo(0, i);
            context.lineTo(BOARD_SIZE, i)
        }
        context.stroke();
        context.closePath();
    }, [])
    useEffect(() => {
        const context = canvasRef.current.getContext('2d');
        players.forEach(player => {
            console.log(player.color)
            context.fillStyle= player.color
            context.fillRect(player.position.x, player.position.y, UNIT, UNIT);
        });
    }, [players]
    )
    

    return <canvas ref={canvasRef} width={BOARD_SIZE} height={BOARD_SIZE} className={css.board} />
}

export default Board