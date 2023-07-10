import { react, useState } from 'react'
import personService from '../services/persons'

const PersonForm = ( props ) =>
{
  const persons = props.persons
  const setPersons = props.setPersons

  const [ newName, setNewName ] = useState( '' )
  const [ newNumber, setNewNumber ] = useState( '' )

  const newPerson = { name: newName, number: newNumber }

  const submitFunc = ( event ) =>
  {
    event.preventDefault()
    if ( persons.every( p => p.name !== newName ) )
    {
      setPersons( [ ...persons, newPerson ] )
      personService.create( newPerson ) //.then( response => { console.log( response ) } )
    }
    else
    {
      const dupe = props.persons.find( p => p.name == newName )

      if ( window.confirm( `${ dupe.name } is already added to the phonebook. Replace the old one?` ) )
      {
        personService.update( dupe.id, newPerson ).then( response =>
        {
          console.log( response )
        } )
        // props.persons.splice( props.persons.indexOf( dupe ), 1, dupe. )
      }
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

export default PersonForm