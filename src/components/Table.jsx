import React from 'react'

function Table({countries}) {
console.log(countries)
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
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        </tbody>
    </table>
      
  )
}

export default Table

