import React, { useState, useEffect } from 'react';
import './index.css'
import  Table from './components/Table';
import  SearchBar from './components/SearchBar';
import  Pagination from './components/Pagination';

const App = (props) => {
  
  const star_wars_API = 'https://swapi.dev/api/people/'
  const homeworld_path = 'https://swapi.dev/api/planets/'
  const species_path = 'https://swapi.dev/api/species/'
  const [charData, setCharData] = useState([{}])
  console.log(setCharData)
  
  useEffect(() => {
    getStarWarsInfo()
  }, [])

const getStarWarsInfo = async () => {
  const response1 = await fetch(star_wars_API)
      const characters = await response1.json()
      const characters_data = characters.results

  const response2 = await fetch(homeworld_path)
      const planets = await response2.json()
      const planets_data = planets.results

  const response3 = await fetch(species_path)
      const species = await response3.json()
      const species_data = species.results
 
  const retrieveAll = async () => {
    let results = await Promise.all([characters_data, planets_data, species_data])
    setCharData(results)
  }
  retrieveAll()
}

  return (
    <div>
        <header>
        Star Wars Characters 
        </header>
        <br></br><br/>
        <SearchBar />
        <br></br><br/>
        <Table newCharData={charData}
        /> 
        <br></br><br/>
        <Pagination />    
    </div>    
  )
}

export default App;
