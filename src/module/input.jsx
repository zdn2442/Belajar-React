import React from 'react';

export default function Input({label,isError, ...props}) {
    return(
        <div className="input">
        <label className="label" htmlFor={label}>
          {label}
        </label>
        <input {...props} className="input-text" id={label}/>
        {isError && 
        <p className="error">
          Please fill correctly
        </p>
        }
        
      </div>
    )
}