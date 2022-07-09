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
      {props.newCharData.map(one => {
        return(
          <tr key={one.id}>
            <td>{one.name}</td>
            <td>{one.birth_year}</td>
            <td>{one.height}</td>
            <td>{one.mass}</td>
            <td>{one.name}</td>
            <td>{one.name}</td>
          </tr>
        )
      })}
      </tbody>
    </table>
  )
}

export default Table 
