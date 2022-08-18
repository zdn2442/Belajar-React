import React from 'react';

export default function InputLagi({label,isError,textError, ...props}) {
    return(
        <div className="input">
        <label className="label" htmlFor={label}>
          {label}
        </label>
        <input {...props} className="input-text" id={label} type={'date'}/>
        {isError && 
        <p className="error">
         {textError}
        </p>
        }
      </div>
    )
}