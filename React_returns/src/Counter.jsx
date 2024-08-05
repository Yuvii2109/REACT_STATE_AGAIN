// Counter.jsx code 

import { useState, useEffect } from "react";

export default function Counter() {
    const [countx, setCountx] = useState(0);
    const [county, setCounty] = useState(0);
    let increaseCountx = () => {
        setCountx(currentCount => currentCount + 1);
    };
    let increaseCounty = () => {
        setCounty(currentCount => currentCount + 1);
    };
    useEffect(function printSomething(){
        console.log("This is a side effect");
    })
    return(
        <div>
            <h3>Countx - {countx}</h3>
            <button onClick={increaseCountx}>Increase Countx</button>
            <h3>County - {county}</h3>
            <button onClick={increaseCounty}>Increase County</button>
        </div>
    )
}