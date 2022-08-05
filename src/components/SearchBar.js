import React from 'react'

const SearchBar = () => {
  return(
    <div className='search--bar'>
      <span>search character data:</span> 
      <input type='text' placeholder="search character data..."></input>
      
      {/*
      Hints
      array.filter()
      track another piece of state 
      can only filter 10 characters at a time */}
    </div>
  )

}

export default SearchBar