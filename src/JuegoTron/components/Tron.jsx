import { useReducer, useEffect } from "react";
import { PLAYER_ONE, PLAYER_TWO } from "../confic/const";
import useInterval from "../hooks/useInterval";
import Board from "./Board";
import sumCoordinates from "../utils/sumCoordinates";


const initialState = [PLAYER_ONE, PLAYER_TWO];
const updateGame = (players, action) => {
  if (action.type === "move") {
    const newPlayers = players.map((player) => ({
      ...player,
      position: sumCoordinates(player.position, player.direccion),
    }));
    return newPlayers;
  }
  if(action.type=== "changeDirection"){
    const newPlayers = players.map((player) => ({
      ...player,
      direccion: player.keys[action.key]
        ? player.keys[action.key]
        : player.direccion,
    }));
    return newPlayers;
  }
};
const Tron = () => {
  
  const [players, gameDispatch] = useReducer(updateGame, initialState);
  useInterval(function () {
    gameDispatch({ type: "move" });
  }, 1000);
  useEffect(() => {
    const handleKeyPress = (event) => {
      const key = `${event.keyCode}`;
      gameDispatch({ type: "changeDirection", key});
    };

    document.addEventListener("keydown", handleKeyPress);
    const cleanUp = () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
    return cleanUp;
  }, []);
  return <Board players={players} />;
};
export default Tron;
