// Redux root reducer
// Track all the state changes
//
// Author : Simon Li  Jan 23, 2020
//
import Action from '../actions';

export default (state = {value: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return Object.assign(state, {value: Action.increment(state.value)})
    
        case 'DECREMENT':
            return Object.assign(state, {value: Action.decrement(state.value)})
    
        case 'RESET':
            return Object.assign(state, {value: Action.reset()})
        
        default:
            return state
      }
}
