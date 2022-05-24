import React, { useCallback, useState } from 'react'
import '../02-userEffect/effects.css';
import { ShowIncrement } from './ShowIncrement';
export const CallBackHook = () => {
    //su uso es cuando necesitamos evitar el 
    // rederizado del componente cadavez que el padre se llame
    const [counter, setCounter] = useState(10);
    // const increment = () => {
    //     setCounter(counter + 1);
    // };

    const increment = useCallback(
        (num) => {
            setCounter(c => c + num);
        },
        [setCounter],
    )
// cuando hay un useEffects y la dependecia es la funcion 
// es recomendado usar el useCallback
    return (
        <div>
            <h1>use CallBackHook: {counter}</h1>
            <br />

            <ShowIncrement increment={increment}></ShowIncrement>
        </div>
    )
}
