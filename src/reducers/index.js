/**
 * Reducer function. Basically the reducer will be getting the state and 
 * what to do on the state. 
 * action is passed with the parameter telling what to do on the state.
 * 
 */
const initialState = {
    name: ''//initial name state is blank.
}

/**
 * 
 * @param {object} state 
 * @param {object} action 
 */
const reducer = (state = initialState, action) => {
    const newState = {...state};
    if (action.type === 'UPDATE_NAME') {//whenever the type is update_name, well, update name.
        newState.name = action.name;
    }

    return newState;
}

//refer a bit more on reducers https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers
export default reducer;