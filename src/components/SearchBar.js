import React, {useState} from 'react'

const SearchBar = ({ getQuery, characterData }) => {
/*
  //url.filter(prev => )

  const [text, setText] = useState('')

  const onChange = (q) => {+
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
  */

  const [searchTerm, setSearchTerm] = useState('')

  return(
    <div className='search-container'>
      <input 
        type='text'
        placeholder='Search'
        onChange={(e) => setSearchTerm(e.target.value)} 
      />
      {characterData.filter((val) => { return searchTerm == '' ? val : val.name.toLowerCase().includes(searchTerm.toLowerCase) }).map((char, key={key}) => {
      return <div className='user' key={key}><p>{char.name}</p></div>
      })}
    </div>
  )



}

export default SearchBar

   {/*
      Hints
      array.filter()
      track another piece of state 
      can only filter 10 characters at a time 
    */}