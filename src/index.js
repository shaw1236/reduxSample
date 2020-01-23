// React entry point
//
// Author : Simon Li  Jan 23, 2020
//
import React from 'react';
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Counter from './components/Counter'
import counter from './reducers'

// Create a single Indux store
const store = createStore(counter)
// Single page website
const rootEl = document.getElementById('root')

ReactDOM.render(<p>Hello world</p>, rootEl);

//value={store.getState().value}
const render = () => ReactDOM.render(
  <Counter
    value={store.getState().value}
    onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
    onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
    onReset={() => store.dispatch({ type: 'RESET' })}
  />,
  rootEl
)

render()
store.subscribe(render)