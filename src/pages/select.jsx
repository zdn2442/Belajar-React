import React from 'react';

export default function Select({label, isError, textError, children, ...props}) {
    return(
        <div className='input'>
            <label>
                {label}
            </label>
            <select {...props} className='input-text border' id={label}>
                {children}
            </select>
            {isError && <p className='error'>{textError}</p>}
        </div>
    )
}