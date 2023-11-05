import { useState, useEffect } from 'react'
import axios from 'axios'
import personService from './services/persons'
import DisplayNumbers from './components/DisplayNumbers'
import PersonForm from './components/PersonForm'
import Notification from './components/Notification'
import './index.css'

//Todo
//move components in separate file
//refactor

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
  const [ errorMessage, setErrorMessage ] = useState( null )

  useEffect( () =>
  {
    console.log( 'effect' )

    personService.getAll().then( response =>
    {
      console.log( 'promise fulfilled' )
      setPersons( response.data )
    } )
  }, [] )

  console.log( 'render', persons.length, 'notes' )

  const filterInput = ( event ) =>
  {
    setFilter( new RegExp( `${ event.target.value }`, 'i' ) )
  }

  // To Do
  // separate logic from UI
  return (
    <div>
      <Notification message={ errorMessage } />
      <h2>Phonebook</h2>
      <div>
        filter shown with <input onChange={ filterInput } />
      </div>
      <h2>add a new</h2>
      <PersonForm persons={ persons } setPersons={ setPersons } setErrorMessage={ setErrorMessage } />
      <h2>Numbers</h2>
      <DisplayNumbers persons={ persons } setPersons={ setPersons } filter={ filter } setErrorMessage={ setErrorMessage } />
    </div >
  )
}

export default App