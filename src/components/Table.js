import React from 'react'

 const Table = ({newCharData, isLoading}) => {

  return(
    isLoading ? <h1>Loading...</h1> :
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
        {newCharData.map(char => {
          return(
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
  )
}

export default Table 
