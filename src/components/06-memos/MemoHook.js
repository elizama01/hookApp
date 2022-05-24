import React, { useMemo, useState } from 'react'
import { procesoPesado } from '../../helpers/procesoPesado';
import { useCounter } from '../../hooks/useCounter';
import '../02-userEffect/effects.css';
export const MemoHook = () => {

    const { state, increment } = useCounter(10);
    const [show, setShow] = useState(true)


    const memoProcesoPesado = useMemo(() => procesoPesado(state), [state])

    return (
        <div>
            <h1>MEMO HOOK</h1>

            <h3>Counter <small>{state}</small></h3>
            <br />
            <p> {memoProcesoPesado}</p>
            {/* <button className='btn btn-primary' onClick={() => { increment(1) }}>increment +1</button> */}
            <button className='btn btn-primary' onClick={() => { increment(1) }}>increment +1</button>
            <button
                className='btn btn-outline-primary ml-3'
                onClick={
                    () => {
                        setShow(!show);
                    }
                }>
                Show/Hide {JSON.stringify(show)}
            </button>
        </div>
    )
}
