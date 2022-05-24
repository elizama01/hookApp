import React, { useRef } from 'react'

export const FocusScreen = () => {
    const inputRef = useRef();
    // console.log(ref);
    const handleClick = () => {
        inputRef.current.select();
        console.log(inputRef);
    }
    return (
        <div>
            <h1>FocusScreen</h1>
            <br />
            <input
                ref={inputRef}
                className='form-control'
                placeholder='Su nombre'
            />
            <button className='btn btn-outline-primary mt-5'
                onClick={handleClick} >Select</button>
        </div>
    )
}
