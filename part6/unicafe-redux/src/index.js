import React from 'react';
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore( reducer )

const App = () =>
{
  const good = () =>
  {
    store.dispatch( {
      type: 'GOOD'
    } )
  }

  return (
    <div>
      <button onClick={ good }>good</button>
      <button onClick={ () => store.dispatch( { type: 'OK' } ) }>ok</button>
      <button onClick={ () => store.dispatch( { type: 'BAD' } ) }>bad</button>
      <button onClick={ () => store.dispatch( { type: 'ZERO' } ) }>reset stats</button>
      <div>good: { store.getState().good }</div>
      <div>ok: { store.getState().ok }</div>
      <div>bad: { store.getState().bad }</div>
    </div >
  )
}

const renderApp = () =>
{
  ReactDOM.render( <App />, document.getElementById( 'root' ) )
}

renderApp()
store.subscribe( renderApp )