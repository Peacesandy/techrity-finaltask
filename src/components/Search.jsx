import React from 'react'

function Search() {
  return (
    <form>
      <input id='placeholder' className='input'  type='text' placeholder='Search for country...'/>
      <p>(For a particular country, use the search bar)</p>
    </form>
  )
}

export default Search