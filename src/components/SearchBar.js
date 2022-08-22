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
      <form>
        <input
        type='text'
        className='form-control'
        placeholder='Search characters'
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