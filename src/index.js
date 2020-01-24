// React entry point
//
// Author : Simon Li  Jan 23, 2020
//
////////////////////////////////////////////
import React from 'react';
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Counter from './components/Counter'
import counter from './reducers'
import Action from './actions'

// Create a single Indux store
const store = createStore(counter)
// Single page website
const rootEl = document.getElementById('root')

//ReactDOM.render(<p>Hello world</p>, rootEl);
const render = () => ReactDOM.render(
  <Counter
    value={store.getState().value}
    onIncrement={() => store.dispatch(Action.increment())}
    onDecrement={() => store.dispatch(Action.decrement())}
    onReset={() => store.dispatch(Action.reset())}
  />,
  rootEl
)

render()
store.subscribe(render)