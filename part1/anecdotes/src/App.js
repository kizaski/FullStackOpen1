import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function App ()
{
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const [ selected, setSelected ] = useState( 0 )

  function randomIntBetween ( min, max )
  {
    return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
  }

  const next = () =>
  {
    setSelected( randomIntBetween( 0, anecdotes.length - 1 ) )
  }

  return (
    <div className="App">
      <header className="App-header">
        <RandomAnecdote arr={ anecdotes } sel={ selected } nex={ next } />

      </header>
    </div>
  );
}

const RandomAnecdote = ( { arr, sel, nex } ) =>
{
  return (
    <div>
      <p>{ arr[ sel ] }</p>
      <button onClick={ nex }>next anecdote</button>
      <p> Has <span>00</span> votes</p>
      <button>vote</button>
    </div>
  )
}

export default App;
