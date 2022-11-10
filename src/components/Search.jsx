import React from 'react'
import { useState, useEffect } from 'react'


function Search(items) {

  const [q, setQ] = useState("")
const [searchParam] = useState(["name", "capital", "population", "currency", "flag"])

useEffect(() => {
      fetch("https://restcountries.com/v2/all")
}, [])

  return(
    <form>
      <input id='placeholder' className='input'  type='text' placeholder='Search for country...'/>
    </form>
  )
}

export default Search