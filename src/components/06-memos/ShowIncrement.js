import React from 'react'

export const ShowIncrement = React.memo(({ increment }) => {
    console.log('Me volvi a incrementar');
    return (
        <div>
            <button
                className='btn btn-primary'
                onClick={() => {
                    increment(5);
                }}
            >increment</button>  </div>
    )
})
