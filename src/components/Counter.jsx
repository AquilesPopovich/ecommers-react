import { useState } from "react"


export const Counter = () => {
    const [number, setNumber] = useState(0);

    const sumar = () =>{
        setNumber(number+1)
    };

    const restar = () =>{
        setNumber(number-1)
    }

    return(
        <div>
            <button onClick={restar}>disminuir</button>;
            <h2>{number}</h2>;
            <button onClick={sumar}>aumentar</button>;
        </div>
    );
};