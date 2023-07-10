import React from 'react'
import personService from '../services/persons'

const DisplayNumbers = ( props ) =>
{
  const persons = props.persons
  const setPersons = props.setPersons
  const filter = props.filter

  const display = persons
    .filter( p => p.name.match( filter ) )
    .map( p =>
      <div>{ p.name } { p.number } <button onClick={ () =>
      {
        if ( window.confirm( `Delete ${ p.name }?` ) )
        {
          personService
            .remove( p.id )
            .then( () =>
            {
              setPersons( persons.filter( pp => pp.id !== p.id ) )
            } )
          // .catch( error => {} )
        }
      } }>delete</button> </div>
    )

  return (
    <>{ display }</>
  )
}

export default DisplayNumbers