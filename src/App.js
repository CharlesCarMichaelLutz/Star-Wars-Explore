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
  const [displayPeople, setDisplayPeople] = useState([])
  const [displayHome, setDisplayHome] = useState([])
  const [displaySpecies, setDisplaySpecies] = useState([])
  
  useEffect(() => {
    getPeople()
    getHome()
    getSpec()
  }, [])

 
 const getPeople = async () => {
  const response = await fetch(star_wars_API)
  const data = await response.json()
  const amazing = data.results
  setDisplayPeople(amazing)
}

const getHome = async () => {
  const world = await fetch(homeworld_path)
  const world_data = await world.json()
  const incredible = world_data.results
  setDisplayHome(incredible)
}

const getSpec = async () => {
  const spec = await fetch(species_path)
  const spec_data = await spec.json()
  const sweet = spec_data.results
  setDisplaySpecies(sweet)
}

 /*
  async getPeople = () => {
  const response1 = await fetch(star_wars_API)
  const json1 = await response1.json()
  const response2 = await fetch(homeworld_path + json1)
  const json2 = await response2.json()
  const response3 = await fetch(species_path + json2)
  setDisplayPeople(response3)
}
*/

/*
let promises = [getPeople, getHome, getSpec]
  Promise.all(promises).then(results => {

  })
*/

  return (
    <div>
        <header>
        Star Wars Characters 
        </header>
        <br></br><br/>
        <SearchBar />
        <br></br><br/>
        <Table newDisplay={displayPeople}
               newHome={displayHome}
               newSpecies={displaySpecies}
        /> 
        <br></br><br/>
        <Pagination />    
    </div>
    
  )
}

export default App;
