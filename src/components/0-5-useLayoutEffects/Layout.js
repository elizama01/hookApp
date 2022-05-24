import React, { useLayoutEffect, useRef, useState } from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './layout.css';
export const Layout = () => {
    const { state, increment } = useCounter(1);
    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${state}`);
    // console.log(data);
    const { author, quote } = !!data && data[0];


    const pTag = useRef();

    const [boxSize, setBoxSize] = useState({})
    useLayoutEffect(() => {
        setBoxSize(pTag.current.getBoundingClientRect());
    }, [quote]);
    return (
        <div>
            <h1>breakingbadapi quotes</h1>
            <br />
            <blockquote className='blockquote text-rigth'>
                <p className='mb-8'
                    ref={pTag}>{quote}</p>
                <footer className='blockquote-footer'>{author}</footer>
            </blockquote>
            <pre>
                {JSON.stringify(boxSize,null,3)}
            </pre>
            <button className='btn btn-primary' onClick={() => increment(1)}>Siguiente</button>
        </div>
    )
}
