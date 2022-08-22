import React from 'react';

export default function Textarea({isError,textError ,...props}) {
    return(
        <React.Fragment>
            <textarea {...props} placeholder='Catatan' className='textarea'>

            </textarea>
            {isError && 
        <p className="error">
         {textError}
        </p>
        }
        </React.Fragment>
    )
}