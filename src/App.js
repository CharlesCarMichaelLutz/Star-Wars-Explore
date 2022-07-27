import React, { useState, useEffect } from 'react';
import './index.css'
import  Table from './components/Table';
import  SearchBar from './components/SearchBar';
import  Pagination from './components/Pagination';
import  Pages from './components/Pages';

const App = (props) => {
  
  const star_wars_API = 'https://swapi.dev/api/people/'
  const homeworld_API = 'https://swapi.dev/api/planets/'
  const species_API = 'https://swapi.dev/api/species/'

  const [characterData, setCharacterData] = useState([])
  const [planetData, setPlanetData] = useState([])
  const [speciesData, setSpeciesData] = useState([])

  const [isCharactersLoading, setIsCharactersLoading] = useState(true)
  const [isSpeciesLoading, setIsSpeciesLoading] = useState(true)
  const [isPlanetsLoading, setIsPlanetsLoading] = useState(true)

  const [currentPage, setCurrentPage] = useState(1)
  const [rowsPerPage] = useState(10)

 

  useEffect(() => {    
    const getCharacters = async () => {
      let next = star_wars_API
      while(next) {
      const data = await fetch(next)
        .then((res) => res.json())
        setCharacterData(prevState => [...data.results, ...prevState])
      next = data.next
      }
      setIsCharactersLoading(false);
    }

    const getPlanets = async () => {
      let next = homeworld_API
      while(next) {
      const data = await fetch(next)
        .then((res) => res.json())
         setPlanetData(prevState => [...data.results, ...prevState])
      next = data.next
      }
      setIsPlanetsLoading(false);
    }
  
    const getSpecies = async () => {
      let next = species_API
      while(next) { 
      const data = await fetch(next)
        .then((res) => res.json())
         setSpeciesData(prevState => [...data.results, ...prevState])
      next = data.next
      }
      setIsSpeciesLoading(false);
    }
  
    getCharacters()
    getPlanets()
    getSpecies()  
  }, [])

  useEffect(() => {
    if(isCharactersLoading === false && isPlanetsLoading === false && isSpeciesLoading === false) { 
    const matchingData = characterData.map(character => {
      for (const planet of planetData){
        if (character.homeworld === planet.url){
         character.homeworld = planet.name
        }
      }

      for (const species of speciesData){
        if (character.species.length == 0){
         character.species = "Human"
        }else if(character.species[0] == species.url){
          character.species = species.name
        }
      }
       return character 
    })
    setCharacterData(matchingData)
  }
  }, [isCharactersLoading, isPlanetsLoading, isSpeciesLoading])

  
  const indexOfEnd = currentPage * rowsPerPage
  const indexOfStart = indexOfEnd - rowsPerPage
  const displayPages = characterData.map(character => {
    (character.slice(indexOfStart, indexOfEnd))
  })

  const paginate = (pageNumber) => setCharacterData(pageNumber)

  return (
    <div>
        <header>
        Star Wars Characters 
        </header>
        <br></br><br/>
        <SearchBar />
        <br></br><br/>
        <Table newCharData={characterData}
        /> 
        <br></br><br/>
        <Pages 
        pages={displayPages}
                    />   
        <Pagination 
        rowsPerPage={rowsPerPage}
        totalPages={characterData.length}
        paginate={paginate}
        
        /> 
    </div>    
  )
}

export default App;
