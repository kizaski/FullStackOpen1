import { useState } from 'react'
//import componentname from workingdirectory

const App = () =>
{
  const [ persons, setPersons ] = useState( [
    {
      name: 'Arto Hellas',
      number: '999-000-000'
    },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ] )
  const [ shownPersons, setShownPersons ] = useState( persons ) //todo reafctor
  const [ newName, setNewName ] = useState( '' )
  const [ newNumber, setNewNumber ] = useState( '' )
  // console.log( 'object: %O', persons );
  //submit --> onClick ? react handles it? - event preventDefault does
  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input //refactor 
          onChange={ ( event ) =>
          {
            if ( event.target.value === null )
            {
              setShownPersons( persons )
            }
            else
            {
              const filter = new RegExp( `${ event.target.value }`, 'i' )//idea: set only this here and use it in Numbers display below
              console.log( filter )
              setShownPersons( persons.filter( p => p.name.match( filter ) ) )//and remove this ; make new encapsulated var for display in Numbers
            }
          } } />
      </div>
      <h2>add a new</h2>
      <form onSubmit={ ( event ) =>
      {
        event.preventDefault()
        if ( persons.every( p => p.name !== newName ) )
        {
          setShownPersons( [ ...persons, { name: newName, number: newNumber } ] ) //setPersons - doesnt re-render on submit
          setPersons( [ ...persons, { name: newName, number: newNumber } ] )
          console.log( persons )
          console.log( shownPersons )
        }
        else
        {
          //alert( `${ newName } is already added to the phonebook` )
        }
      } }>
        <div>
          name: <input //component - number needs input checking - with callback or builtin validation
            value={ newName }
            onChange={ ( event ) =>
            {
              setNewName( event.target.value )
            } } />
          <br />
          number: <input
            value={ newNumber }
            onChange={ ( event ) =>
            {
              setNewNumber( event.target.value )
            } } />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form >
      <h2>Numbers</h2>
      <div>
        {
          shownPersons === null //todo refactor: look above idea ; if filter -> shownPersons (filteredPersons?) ; render only on first load ; shownPersons !== persons
            ? persons.map( p => <div>{ p.name } { p.number }</div> )
            : shownPersons.map( p => <div>{ p.name } { p.number }</div> )
        }
      </div>
    </div >
  )
}

export default App