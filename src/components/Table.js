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
        {props.newCharData.map(char => {
          return(
            <tr>
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

/*
    
        {props.newCharData.map(data => {
          {props.newPlanetData.map(home =>{
              {props.newSpeciesData.map(spec => { 
    return(
         <tr key={data.id}>
          <td>{data.name}</td>
          <td>{data.birth_year}</td>
          <td>{data.height}</td>
          <td>{data.mass}</td>
          <td>{home.name}</td>
          <td>{spec.name}</td>
        </tr>
    )
              })}
            })}
          })}

*/