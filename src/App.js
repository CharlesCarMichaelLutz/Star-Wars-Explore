import React, { useState, useEffect } from 'react';
import './index.css'
import axios from 'axios'
import  Table from './components/Table';
import  SearchBar from './components/SearchBar';
import  Pagination from './components/Pagination';

const App = (props) => {
  
  const star_wars_API = 'https://swapi.dev/api/people/'
  const homeworld_path = 'https://swapi.dev/api/planets/'
  const species_path = 'https://swapi.dev/api/species/'
  const [charData, setCharData] = useState([{}])
  console.log(charData)
  //const [displayCharacters, setDisplayCharacters] = useState([])
  //const [displayPlanets, setDisplayPlanets] = useState([])
  //const [displaySpecies, setDisplaySpecies] = useState([])

  useEffect(() => {
    getStarWarsInfo()
  }, [])

 /*

 const getCharacters = async () => {
  const response = await fetch(star_wars_API)
  const data = await response.json()
  const characters = data.results
  setDisplayCharacters(characters)
}

const getPlanets = async () => {
  const world = await fetch(homeworld_path)
  const world_data = await world.json()
  const planets = world_data.results
  setDisplayPlanets(planets)
}

const getSpecies = async () => {
  const spec = await fetch(species_path)
  const spec_data = await spec.json()
  const species = spec_data.results
  setDisplaySpecies(species)
}

const assembleData = async () => {
  let results = Promise.all([getCharacters, getPlanets, getSpecies ])
  console.log(results)
}

}
*/

/*
const getCharacters = async () =>{
  const response = await fetch(star_wars_API)
  const data = await response.json()
  const characters = data.results;
const getPlanets = async () =>{
  const world = await fetch(homeworld_path)
  const world_data = await world.json()
  const planets = world_data.results;
const getSpecies = async () => {
  const spec = await fetch(species_path)
  const spec_data = await spec.json()
  const species = spec_data.results;
}
}
setCharData([characters, planets, species])
}
*/
 
const getStarWarsInfo = async () => {
  const response1 = await fetch(star_wars_API)
      const characters = await response1.json()
      const characters_data = characters.results

  const response2 = await fetch(homeworld_path)
      const planets = await response2.json()
      const planets_data = planets.results;

  const response3 = await fetch(species_path)
      const species = await response3.json()
      const species_data = species.results
  setCharData(await characters_data, await planets_data, await species_data)
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
