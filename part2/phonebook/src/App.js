import { useState, useEffect } from 'react'
import axios from 'axios'
import personService from './services/persons'
import DisplayNumbers from './components/DisplayNumbers'
import PersonForm from './components/PersonForm'

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
      <DisplayNumbers persons={ persons } setPersons={ setPersons } filter={ filter } />
    </div >
  )
}

export default App