import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter';
import '../02-userEffect/effects.css';
import { Small } from './Small';
export const Memorize = () => {

    const { state, increment } = useCounter(10);
    const [show, setShow] = useState(true)
    return (
        <div>
            <h1>Counter <Small>{state}</Small></h1>
            <br />
            {/* <button className='btn btn-primary' onClick={() => { increment(1) }}>increment +1</button> */}
            <button className='btn btn-primary' onClick={() => { increment(1) }}>increment +1</button>
            <button 
            className='btn btn-outline-primary ml-3'
            onClick={
                ()=>{
                    setShow(!show);
                }
            }>
                Show/Hide { JSON.stringify(show)}
            </button>
        </div>
    )
}
