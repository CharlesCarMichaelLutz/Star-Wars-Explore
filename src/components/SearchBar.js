import React, {useState} from 'react'

const SearchBar = ({ getQuery, getCharacters }) => {

  //url.filter(prev => )

  const [text, setText] = useState('')

  const onChange = (q) => {
    setText(q)
    getQuery(q)
  }

  return(
    <section className='search'>
      <form className='character-form'>
        <input
        type='text'
        className='form-control'
        placeholder='Search Characters'
        value={text}
        onChange={(e) => onChange(e.target.value)}
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

    */}