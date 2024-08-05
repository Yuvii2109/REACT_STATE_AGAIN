// LudoBoard.jsx code 

import { useState } from "react"
export default function LudoBoard(){
    let[moves, setMoves] = useState({
        blue: 0,
        red: 0,
        green: 0,
        yellow: 0
    });
    let updateBlue = () => {
        console.log(moves.blue);
        setMoves((prevMoves) => {
            return { ...prevMoves, blue: prevMoves.blue + 1 };
        });
    };
    let updateYellow = () => {
        console.log(moves.yellow);
        setMoves((prevMoves) => {
            return { ...prevMoves, yellow: prevMoves.yellow + 1 };
        });
    };
    let updateGreen = () => {
        console.log(moves.green);
        setMoves((prevMoves) => {
            return { ...prevMoves, green: prevMoves.green + 1 };
        });
    };
    let updateRed = () => {
        console.log(moves.red);
        setMoves((prevMoves) => {
            return { ...prevMoves, red: prevMoves.red + 1 };
            // Ab yahan ... -> spread -> new copy -> new address -> 
            // AB react detect kr payega ki nayi object pass hui h -> 
            // state variable main kuch change aaya hai -> toh re-render krana pdega 
        });
    };
    return(
        <div>
            <h1>Game Begins!</h1>
            <div className="board">
                <h4>Blue moves = {moves.blue}</h4>
                <button style={{backgroundColor: "blue"}} onClick={updateBlue}><b>+1</b></button>
                <h4>Yellow moves = {moves.yellow}</h4>
                <button style={{backgroundColor: "yellow", color: "black"}} onClick={updateYellow}><b>+1</b></button>
                <h4>Green moves = {moves.green}</h4>
                <button style={{backgroundColor: "green"}} onClick={updateGreen}><b>+1</b></button>
                <h4>Red moves = {moves.red}</h4>
                <button style={{backgroundColor: "red"}} onClick={updateRed}><b>+1</b></button>
            </div>
        </div>
    )
}