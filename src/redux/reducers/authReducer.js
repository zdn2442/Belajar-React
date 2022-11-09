const initialState = {
    email : '',
    password : '',
    isAuth : false
}

export const authProcess = (state = initialState, action) => {
    if (action.type === 'login') {
        return{
            ...state,
            name : action.name,
            email : action.email,
            isAuth : action.isAuth
        }
    }
    return state
}
