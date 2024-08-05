// Lottery.jsx code 

import { useState } from "react";
import { genTicket } from "./helper.js";
import Ticket from "./Ticket.jsx";

export default function Lottery({n=3, winCondition}){
    let [ticket, setTicket] = useState(genTicket(n));
    let isWinning = winCondition(ticket);
    let buyTicket = () => {
        setTicket(genTicket(n));
    }
    return(
        <div>
            <h1>Lottery Game!</h1>
            <div className="ticket">
                <Ticket ticket={ticket}/> 
            </div>
            <br /> <br />
            <button onClick={buyTicket}>Buy Ticket</button>
            <h2>{isWinning && "Congratulations, You won!!"}</h2>
        </div>
    );
}