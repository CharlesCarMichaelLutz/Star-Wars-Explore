import React from 'react'

const Table = (props) => {

  //<Card />

  return(
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Birth Date</th>
          <th>Height</th>
          <th>Mass</th>
          <th>Homeworld</th>
          <th>Species</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{props.name}</td>
          <td>{props.birthDate}</td>
          <td>{props.height}</td>
          <td>{props.mass}</td>
          <td>{props.homeworld}</td>
          <td>{props.species}</td>
        </tr>
      </tbody>
    </table>
  )

}

export default Table 
