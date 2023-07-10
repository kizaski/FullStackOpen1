import React from 'react'
import personService from '../services/persons'

const DisplayNumbers = ( props ) =>
{
  const persons = props.persons
  const setPersons = props.setPersons
  const filter = props.filter

  const deleteClick = () =>
  {
    if ( window.confirm( `Delete ${ p.name }?` ) )
    {
      personService
        .remove( p.id )
        .then( () =>
        {
          setPersons( persons.filter( pp => pp.id !== p.id ) )
        } )
    }
  }

  const filteredPersons = persons.filter( p => p.name.match( filter ) )

  return (
    <>{ filteredPersons.map( ( p ) =>
      <div>{ p.name } { p.number } <button onClick={ deleteClick }>delete</button> </div>
    ) }
    </>
  )
}

export default DisplayNumbers