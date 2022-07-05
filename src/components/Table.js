import React from 'react'

const Table = (props) => {

  return(
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Birth Year</th>
          <th>Height</th>
          <th>Mass</th>
          <th>Homeworld</th>
          <th>Species</th>
        </tr>
      </thead>
      <tbody>
        {props.newDisplay.map(prev => {
          return(
        <tr key={prev.created}>
          <td>{prev.name}</td>
          <td>{prev.birth_year}</td>
          <td>{prev.height}</td>
          <td>{prev.mass}</td>
          <td>{prev.homeworld}</td>
          <td>{prev.species}</td>
        </tr>
          )
        })}
    </tbody>
    </table>
  )
}

export default Table 
