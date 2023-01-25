import {useReducer} from 'react'
import { PLAYER_ONE, PLAYER_TWO } from '../confic/const';
import useInterval from '../hooks/useInterval'
import Board from './Board';

const initialState = [PLAYER_ONE, PLAYER_TWO];
const updateGame = (state, action)=>{
    if(action.type === 'move'){
        console.log("Toca mover");
        return state
    }
}
const Tron = () => {
    
   const [players, gameDispatch]= useReducer(updateGame, initialState)
   useInterval(function () {
   
   },1000)
  return (
    <Board
    players={players}
    />
  )
}
export default Tron