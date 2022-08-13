import React from 'react';

export default function InputJuga({label,isError,textError, ...props}) {
    return(
        <div className="input">
        <label className="label" htmlFor={label}>
          {label}
        </label>
        {/* <input {...props} className="input-text" id={label} type={'select'}/> */}

        <select name="gender" id="gender" {...props}>
                    <option>Gender</option>   
                    <option value="Man">Man</option>
                    <option value="Woman">Woman</option>
                   </select>
        {isError && 
        <p className="error">
         {textError}
        </p>
        }
      </div>
    )
}