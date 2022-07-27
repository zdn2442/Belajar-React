import React from 'react'
import "../style/style.css"
function Button() {
    return(
        <React.Fragment>
            <button className="button">Save</button>
        </React.Fragment>
    );
}

function Input() {
    return(
        <React.Fragment>
        <input placeholder='input...' className='input'/>
    </React.Fragment>
    )
}
export {Button, Input};