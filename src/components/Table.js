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
      {props.newCharData.map((cool, yes, can) => {
        return(
          <tr key={cool.id}>
            <td>{cool.name}</td>
            <td>{cool.birth_year}</td>
            <td>{cool.height}</td>
            <td>{cool.mass}</td>
            <td>{yes.name}</td>
            <td>{can.name}</td>
          </tr>
        )
      })}
    </tbody>
    </table>
  )
}

export default Table 

/*
 {props.newDisplay.map(prev => {
          return(
        <tr key={prev.created}>
          <td>{prev.name}</td>
          <td>{prev.birth_year}</td>
          <td>{prev.height}</td>
          <td>{prev.mass}</td>
        {props.newHome.map(yes => {
          return(<td key={yes.name}>{yes.name}</td>)
        })} 
          {props.newSpecies.map(will => {
            return(<td key={will.name}>{will.name}</td>)
          })}        
        </tr>
        )})} 
*/
