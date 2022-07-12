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
        
  {props.newCharData.map(data => {
        return(
          <tr key={data.id}>
            <td>{data[0,1,2].name}</td>
            <td>{data[3].birth_year}</td>
            <td>{data[2].height}</td>
            <td>{data[1].mass}</td>
            {props.newPlanetData.map(data => {
        return(
            <td>{data[8].name}</td>
        )
      })}
         {props.newSpeciesData.map(data => {
        return(
            <td>{data[7].name}</td>
        )
      })}             
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