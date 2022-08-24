import React, {useState} from 'react'

const SearchBar = ({characterData}) => {

  const [searchTerm, setSearchTerm] = useState('')

  return(
    <div className='search-container'>
      <input 
        type='text'
        placeholder='Search'
        onChange={(e) => setSearchTerm(e.target.value)} 
      />
    {characterData.filter((char) => {
      if(searchTerm == '') {
        return char
      } else if (char.name.toLowerCase().includes(searchTerm.toLowerCase())){
        return char
      }
    }).map((char, key) => {
      return (
        <div key={key}>
          <p>{char.name}</p>
        </div>
      )
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

      08/24/22
      SearchBar is connected and functioning,
      however it will duplicate and display the array items above the table
      I expect the table to only display the <tr> typed in value for the search 

    */}