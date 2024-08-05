// Joker.jsx code 

import { useState,useEffect } from "react";

export default function Joker(){
    let [joke,setJoke] = useState({});
    const URL = "https://official-joke-api.appspot.com/random_joke";
    const getNewJoke = async () => {
        let response = await fetch(URL);
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        setJoke({
            setup: jsonResponse.setup,
            punchline: jsonResponse.punchline
        });
    }
    // Use useEffect to fetch a joke when the component mounts
    useEffect(() => {
        getNewJoke();
    }, []); // empty dependency array ensures this effect runs only once after initial render
    return(
        <div className="joker">
            <h1 className="joker__title">Joker</h1>
            <h2>{joke.setup}</h2>
            <h3>{joke.punchline}</h3>
            <button onClick={getNewJoke}>Get A Joke</button>
        </div>  
    );
};