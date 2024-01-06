import React, { useState, useEffect } from 'react'
import SearchForm from './components/SearchForm'
import CountryList from './components/CountryList'

function App ()
{
  const [ searchQuery, setSearchQuery ] = useState( '' )
  const [ countries, setCountries ] = useState( [] )
  const [ selectedCountry, setSelectedCountry ] = useState( null )
  const [ errorMessage, setErrorMessage ] = useState( '' )

  const API_BASE_URL = "https://restcountries.com/v3.1/name/"

  useEffect( () =>
  {
    const handleSearch = async () =>
    {
      try
      {
        const response = await fetch( `${ API_BASE_URL }${ searchQuery }` )
        const data = await response.json()

        if ( data.length > 10 )
        {
          console.log('data.length > 10')
          setErrorMessage( 'Too many matches. Please make your query more specific.' )
          setCountries( [] )
          setSelectedCountry( null )
        } else if ( data.length == 1 )
        {
          setErrorMessage( '' )
          setCountries( [] )
          setSelectedCountry( data[ 0 ] )
        } else
        {
          setCountries( data )
          setSelectedCountry( null )
          setErrorMessage( '' )
        }
      } catch ( error )
      {
        console.error( 'Error fetching data:', error )
        setErrorMessage( 'Error fetching data. Please try again.' )
      }
    }

    // Trigger the search only if the searchQuery is not empty
    if ( searchQuery.trim() !== '' )
    {
      handleSearch()
    }
  }, [ searchQuery ] )

  const handleShowCountry = ( country ) =>
  {
    setSelectedCountry( country )
  }

  return (
    <div className="App">
      <h1>Country Information App</h1>
      <SearchForm searchQuery={ searchQuery } setSearchQuery={ setSearchQuery } />

      { errorMessage && <div>{ errorMessage }</div> }
      { countries.length > 0 && selectedCountry === null && (
        <CountryList countries={ countries } handleShowCountry={ handleShowCountry } />
      ) }

      { selectedCountry && (
        <div>
          <h2>{ selectedCountry.name.common }</h2>
          <p>Capital: { selectedCountry.capital }</p>
          <p>Area: { selectedCountry.area } sq. km</p>
          <p>Languages: { Object.values( selectedCountry.languages ).join( ', ' ) }</p>
          <img src={ selectedCountry.flags.png } alt={ `${ selectedCountry.name.common } Flag` } />
        </div>
      ) }
    </div>
  )
}

export default App
