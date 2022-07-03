import React from 'react'

const Table = (props) => {

  return(
    <table>
        <tr>
          <th>Name</th>
          <th>Birth Year</th>
          <th>Height</th>
          <th>Mass</th>
          <th>Homeworld</th>
          <th>Species</th>
        </tr>
        {props.newDisplay.map(prev => {
          return(
      <tbody>
        <tr key={prev.created}>
          <td>{prev.results.name}</td>
          <td>{prev.results.birth_year}</td>
          <td>{prev.results.height}</td>
          <td>{prev.results.mass}</td>
          <td>{prev.results.homeworld}</td>
          <td>{prev.results.species}</td>
        </tr>
      </tbody>
          )
        })}
    </table>
  )
}

export default Table 
