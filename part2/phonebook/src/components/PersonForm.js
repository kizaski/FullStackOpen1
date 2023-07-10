import { react, useState } from 'react'
import personService from '../services/persons'

const PersonForm = ( props ) =>
{
  const persons = props.persons
  const setPersons = props.setPersons

  const [ newName, setNewName ] = useState( '' )
  const [ newNumber, setNewNumber ] = useState( '' )

  const newPerson = { name: newName, number: newNumber }

  const submitPerson = ( event ) =>
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

  const nameInput = ( event ) => { setNewName( event.target.value ) }
  const numberInput = ( event ) => { setNewNumber( event.target.value ) }

  return (
    <form onSubmit={ submitPerson }>
      <div>
        name: <input
          value={ newName }
          onChange={ nameInput } />
        <br />
        number: <input
          value={ newNumber }
          onChange={ numberInput } />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form >
  )
}

export default PersonForm