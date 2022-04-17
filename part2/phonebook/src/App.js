import { useState, useEffect } from 'react'
import axios from 'axios'
//todo import componentname from workingdirectory

const App = () =>
{
  /*
  const [ persons, setPersons ] = useState( [
    { name: 'Arto Hellas', number: '999-000-000', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ] )
  */
  const [ persons, setPersons ] = useState( [] )
  const [ filter, setFilter ] = useState( '' )

  useEffect( () =>
  {
    console.log( 'effect' )

    axios.get( 'http://localhost:3001/db' ).then( response =>
    {
      console.log( 'promise fulfilled' )
      setPersons( response.data.persons )
    } )
  }, [] )

  console.log( 'render', persons.length, 'notes' )


  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input
          onChange={ ( event ) =>
          {
            setFilter( new RegExp( `${ event.target.value }`, 'i' ) )
          } } />
      </div>
      <h2>add a new</h2>
      <PersonForm persons={ persons } setPersons={ setPersons } />
      <h2>Numbers</h2>
      <DisplayNumbers peopleArr={ persons } filter={ filter } />
    </div >
  )
}

const PersonForm = ( props ) =>
{
  const [ newName, setNewName ] = useState( '' )
  const [ newNumber, setNewNumber ] = useState( '' )

  const submitFunc = ( event ) =>
  {
    event.preventDefault()
    if ( props.persons.every( p => p.name !== newName ) )
    {
      props.setPersons( [ ...props.persons, { name: newName, number: newNumber } ] ) //slow
      console.log( props.persons )
    }
    else
    {
      alert( `${ newName } is already added to the phonebook` )
    }
  }

  return (
    <form onSubmit={ submitFunc }>
      <div>
        name: <input
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
  )
}

const DisplayNumbers = ( props ) =>
{
  const display = props.peopleArr
    .filter( p => p.name.match( props.filter ) )
    .map( p =>
      <div>{ p.name } { p.number }</div>
    )

  return (
    <>{ display }</>
  )
}

export default App