import { useState, useEffect } from 'react'
import axios from 'axios'
//todo import componentname from workingdirectory
import personService from './services/persons'

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

const PersonForm = ( props ) =>
{
  const [ newName, setNewName ] = useState( '' )
  const [ newNumber, setNewNumber ] = useState( '' )

  const newPerson = { name: newName, number: newNumber }

  const submitFunc = ( event ) =>
  {
    event.preventDefault()
    if ( props.persons.every( p => p.name !== newName ) )
    {
      props.setPersons( [ ...props.persons, newPerson ] ) //slow
      // console.log( props.persons )
      // axios.post( 'http://localhost:3001/persons', newPerson ).then( response => { console.log( response ) } )
      personService.create( newPerson ).then( response => { console.log( response ) } )
    }
    else
    {
      //edit
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
  const display = props.persons
    .filter( p => p.name.match( props.filter ) )
    .map( p =>
      <div>{ p.name } { p.number } <button onClick={ () =>
      {
        if ( window.confirm( `Delete ${p.name}?` ) )
        {
          personService
            .remove( p.id )
            .then( () =>
            {
              props.setPersons( props.persons.filter( pp => pp.id !== p.id ) )
            } )
          // .catch( error => {} )
        }
      } }>delete</button> </div>
    )

  return (
    <>{ display }</>
  )
}

export default App