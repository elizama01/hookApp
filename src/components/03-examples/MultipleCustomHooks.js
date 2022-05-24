import React from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import '../02-userEffect/effects.css';
export const MultipleCustomHooks = () => {
    const { state, increment } = useCounter(1);
    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${state}`);
    // console.log(data);
    const { author, quote } = !!data && data[0];
    return (
        <div>
            <h1>breakingbadapi quotes</h1>
            <br />
            {
                loading ? (<div className='alert alert-info text-center' >
                    loading...
                </div>) :
                    (
                        <blockquote className='blockquote text-rigth'>
                            <p className='mb-8'>{quote}</p>
                            <footer className='blockquote-footer'>{author}</footer>
                        </blockquote>
                    )
            }

            <button className='btn btn-primary' onClick={()=>increment(1)}>Siguiente</button>
        </div>
    )
}
