import React, {useState} from 'react'

 const Table = ({characterData, isLoading}) => {

  const [searchTerm, setSearchTerm] = useState('')

  return(
    <main>
      <input 
        type='text'
        className='search--bar'
        placeholder='Search'
        onChange={(e) => setSearchTerm(e.target.value)} 
      />
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Birth Year</th>
          <th>Height</th>
          <th>Mass</th>
          <th>Planet</th>
          <th>Species</th>
        </tr>
      </thead>
      <tbody>
      {characterData.filter((char) => {
      if(searchTerm == '') {
        return char
      } else if (char.name.toLowerCase().includes(searchTerm.toLowerCase())){
        return char
      }
    }).map((char) => {
      return (
        <tr key={char.name}>
              <td>{char.name}</td>
              <td>{char.birth_year}</td>
              <td>{char.height}</td>
              <td>{char.mass}</td>               
              <td>{char.homeworld}</td>           
              <td>{char.species}</td>            
        </tr>
      )
    })}
      </tbody> 
    </table>
    </main>
  )
}

export default Table 