import React from 'react'
import personService from '../services/persons'

const DisplayNumbers = ( props ) =>
{
  const display = props.persons
    .filter( p => p.name.match( props.filter ) )
    .map( p =>
      <div>{ p.name } { p.number } <button onClick={ () =>
      {
        if ( window.confirm( `Delete ${ p.name }?` ) )
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

export default DisplayNumbers