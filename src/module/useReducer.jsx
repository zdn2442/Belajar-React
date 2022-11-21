import React, { useReducer } from 'react'

const reducer = (state, action) => {
    if (action.type === "INCREMENT") {
        return{
            count: state.count + 1,
            showText: state.showText
        }
    }
    if (action.type === "DECREMENT") {
        return{
            count: state.count - 1,
            showText: state.showText
        }
    }
    if (action.type === "KALI 2") {
        return{
            count: state.count * 2,
            showText: state.showText
        }
    }
    if (action.type === "BAGI 2") {
        return{
            count: state.count % 2,
            showText: state.showText
        }
    }
    if (action.type === "toggleShowText") {
        return{
            count: state.count,
            showText: !state.showText
        }
    }
    return state
}

function ReducerTutor() {
    const [state, dispatch] = useReducer(reducer, {
        count: 0,
        showText: true
    });
    return(
        <React.Fragment>
            <h1>{state.count}</h1>
            <div className="flex space-x-5">
            <button onClick={() => {
                dispatch({
                    type: "INCREMENT"
                });
                dispatch({
                    type: "toggleShowText"
                });
            }} className='w-40 h-10 border rounded-md hover:bg-black hover:text-white'>
                Increase
            </button>
            <button onClick={() => {
                dispatch({
                    type: "DECREMENT"
                });
                dispatch({
                    type: "toggleShowText"
                });
            }} className='w-40 h-10 border rounded-md hover:bg-black hover:text-white'>
                Decrease
            </button>
            <button onClick={() => {
                dispatch({
                    type: "KALI 2"
                });
                dispatch({
                    type: "toggleShowText"
                });
            }} className='w-40 h-10 border rounded-md hover:bg-black hover:text-white'>
                Kali 2
            </button>
            <button onClick={() => {
                dispatch({
                    type: "BAGI 2"
                });
                dispatch({
                    type: "toggleShowText"
                });
            }} className='w-40 h-10 border rounded-md hover:bg-black hover:text-white'>
                Bagi 2
            </button>
            </div>
            {state.showText && <h1 className=''>YAHALLOO</h1>}
        </React.Fragment>
    )
}

export default ReducerTutor