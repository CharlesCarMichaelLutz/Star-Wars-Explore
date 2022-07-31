import React, { useState, useEffect } from 'react';
import './index.css'
import  Table from './components/Table';
import  SearchBar from './components/SearchBar';
import  Pagination from './components/Pagination';
import  Pages from './components/Pages';

const App = (props) => {
  
  const star_wars_API = 'https://swapi.dev/api/people/'
  const [characterData, setCharacterData] = useState([])

  //  const [isCharactersLoading, setIsCharactersLoading] = useState(true)
  //  const [isSpeciesLoading, setIsSpeciesLoading] = useState(true)
  //  const [isPlanetsLoading, setIsPlanetsLoading] = useState(true)

  const [nextPage, setNextPage] = useState(1)
  const [rowsPerPage] = useState(10)

  useEffect(() => {    
    const getCharacters = async () => {      
      await fetch(star_wars_API)
        .then(async (res) =>  {
          const characterData = await res.json()
          setNextPage(characterData.next)
          const characters1 = await getAdditionalData(characterData.results)
          setCharacterData(characters1)
        })   
      //setIsCharactersLoading(false);
    }
  
    getCharacters() 
  }, [])

  async function getAdditionalData(characters) {
    for(const character of characters) {
      character.homeworld = await fetch(character.homeworld).then(async (res) => {
        const response = await res.json()
        return response.name
      })
    
      if(character.species.length === 0){
        character.species = "Human"
      }else{ 
       character.species = await fetch(character.species).then(async (res) => {
        const retrieve = await res.json()
        return retrieve.name})     
    } 
  } 
    return characters
  }

  // useEffect(() => {
  //   if(isCharactersLoading === false && isPlanetsLoading === false && isSpeciesLoading === false)  { 
  //   const matchingData = characterData.map(character => {
  //     for (const planet of planetData){
  //       if (character.homeworld === planet.url){
  //        character.homeworld = planet.name
  //       }
  //     }

  //     for (const species of speciesData){
  //       if (character.species.length == 0){
  //        character.species = "Human"
  //       }else if(character.species[0] == species.url){
  //         character.species = species.name
  //       }
  //     }
  //      return character 
  //   })
  //   setCharacterData(matchingData)
  // }
  // }, [isCharactersLoading, isPlanetsLoading, isSpeciesLoading ])

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
        pages={characterData}
                    />   
        <Pagination 
        rowsPerPage={rowsPerPage}
        totalPages={characterData}
        paginate={paginate}
        
        /> 
    </div>    
  )
}

export default App;
