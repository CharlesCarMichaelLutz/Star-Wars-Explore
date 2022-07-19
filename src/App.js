import React, { useState, useEffect } from 'react';
import './index.css'
import  Table from './components/Table';
import  SearchBar from './components/SearchBar';
import  Pagination from './components/Pagination';

const App = (props) => {
  
  const star_wars_API = 'https://swapi.dev/api/people/'
  const homeworld_API = 'https://swapi.dev/api/planets/'
  const species_API = 'https://swapi.dev/api/species/'

  const [characterData, setCharacterData] = useState([])
  const [planetData, setPlanetData] = useState([])
  const [speciesData, setSpeciesData] = useState([])
  
  
// when app loads up
  useEffect(() => {    
    const getCharacters = async () => {
      let next = star_wars_API
  // if "next" property of response is truthy then make another http request to that url
   // repeat above logic until "next" property is falsey
      while(next) {
    // make http request to api/characters
      const data = await fetch(next)
        .then((res) => res.json())
      // store response results in a piece of state called "characters"
        setCharacterData(prevState => [...data.results, ...prevState])
      next = data.next
      }
    }

    const getPlanets = async () => {
      let next = homeworld_API
      while(next) {
      const data = await fetch(next)
        .then((res) => res.json())
         setPlanetData(prevState => [...data.results, ...prevState])
      next = data.next
      }
    }

    const getSpecies = async () => {
      let next = species_API
      while(next) { 
      const data = await fetch(next)
        .then((res) => res.json())
         setSpeciesData(prevState => [...data.results, ...prevState])
      next = data.next
      }
    }

    getCharacters()
    getPlanets()
    getSpecies()  
  }, [])

  useEffect(() => {
    const temp = characterData.map(character => {
      for (const planet of planetData){
        if (character.homeworld === planet.url){
         character.homeworld = planet.name
        }
      }
       return character 
    })
    console.log(temp)
    const perm = characterData.map(character => {
      for (const species of speciesData){
        if (character.species === species.url){
         character.species = species.name
        }
      }
       return character 
    })
    console.log(perm)
  }, [planetData, speciesData])

  //problem with human species

  //const one = await Promise.all([data])
  //const two = await Promise.all([planet])
  //const three = await Promise.all([species])

  return (
    <div>
        <header>
        Star Wars Characters 
        </header>
        <br></br><br/>
        <SearchBar />
        <br></br><br/>
        <Table newCharData={characterData}
               newPlanetData={planetData}
               newSpeciesData={speciesData}
        /> 
        <br></br><br/>
        <Pagination />    
    </div>    
  )
}

export default App;
