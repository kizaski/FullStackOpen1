import { useState, useEffect } from 'react'
import axios from 'axios'

function App ()
{
  const [ countries, setCountries ] = useState( [] )

  useEffect( () =>
  {
    setCountries()
    axios.get( 'https://restcountries.com/v3.1/all' ).then( response =>
    {
      ///setCountries( response. data )
    } )
  }, [] )

  return (
    <div>
      find countries <input onChange={ () =>
      {
        //
      } } />
      {
        //map countries.name.common
      }
    </div>
  );
}

export default App;
