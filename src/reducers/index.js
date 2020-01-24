// Redux root reducer
// Track all the state changes
//
// Author : Simon Li  Jan 23, 2020
//
////////////////////////////////////////////

// store state: {value: v}
export default (state = {value: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return Object.assign({}, state, {value: state.value + 1})
    
        case 'DECREMENT':
            return Object.assign({}, state, {value: state.value - 1})
    
        case 'RESET':
            return Object.assign({}, {value: 0})
        
        default:
            return state
      }
}
