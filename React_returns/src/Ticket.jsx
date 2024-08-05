// Ticket.jsx code 

import TicketNum from "./TicketNum";
import "./Ticket.css";

export default function Ticket({ticket}){
    return(
        <div className="ticket">
            <h2><b><u><i>Ticket</i></u></b></h2>
            {
                ticket.map((num, index)=>(
                    <TicketNum num={num} key={index}/>
                ))
            }
        </div>
    );    
};