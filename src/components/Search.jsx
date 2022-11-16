import React from 'react'



function Search({filter}) {

  

  return(
    <form>
      <input id='placeholder' className='input'  type='text' placeholder='Search for country...' onChange={(e) => filter
      (e.target.value)} />
    </form>
  )
      }

export default Search