import React from 'react'

function Table({countries}) {
  
  const renderCountries = () => {
    const countryItems = countries && countries.map((country, id) => {
      const tr =  
    <tr key={id}>
      <td>{id+1}</td>
      <td>{country.name}</td>
      <td>{country.capital}</td>
      <td>{country.population}</td>
      <td>{country?.currencies?.[0]?.symbol}</td>
      <td><img src={country.flag} alt="country-flag" className='img' /></td>
    </tr>
      return tr
  } )
      return countryItems
  }
  
  return (
    <table className='table'>
        <thead>
        <tr>
             <th>S/N</th>
            <th>Name</th>
            <th>Capital</th>
            <th>Population</th>
            <th>Currency</th>
            <th>Flag</th>
        </tr>
        </thead>
        <tbody>
        { countries.length > 0 && renderCountries()}
        </tbody>
    </table>
      
  )
}

export default Table

