import React from 'react'

function CountryList ( { countries, handleShowCountry, errorMessage } )
{
    return (
        <>
            
            <ul>
                { countries.map( ( country ) => (
                    <li key={ country.name.common }>
                        { country.name.common }{ ' ' }
                        <button onClick={ () => handleShowCountry( country ) }>
                            Show Details
                        </button>
                    </li>
                ) ) }
            </ul>
        </>
    )
}

export default CountryList
