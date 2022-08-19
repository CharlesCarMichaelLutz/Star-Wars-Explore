import React from 'react'

const SearchBar = () => {

  //url.filter(prev => )

  return(

    <section className='search'>
      <form>
        <input
        type='text'
        className='form-control'
        placeholder='Seach characters'
        //value={0}
        //onChange=
        />
      </form>
    </section>
  )

}

export default SearchBar

   {/*
      Hints
      array.filter()
      track another piece of state 
      can only filter 10 characters at a time 
    
        <div className='search--bar'>
      <span>Search:</span> 
      <input type='text' placeholder="search character..."></input>
    </div>
    */}