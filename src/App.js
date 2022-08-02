import React, { useState, useEffect } from 'react';
import './index.css'
import  Table from './components/Table';
import  SearchBar from './components/SearchBar';
import  Pagination from './components/Pagination';

const App = (props) => {
  
  const star_wars_API = 'https://swapi.dev/api/people/'
  const [characterData, setCharacterData] = useState([])
  const [nextPage, setNextPage] = useState(1)

  useEffect(() => {    
    const getCharacters = async () => {      
      await fetch(star_wars_API)
        .then(async (res) =>  {
          const characterData = await res.json()
          setNextPage(characterData.next)
          const characters1 = await getAdditionalData(characterData.results)
          setCharacterData(characters1)
        })   
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

  const handlePageClick = (e) => {
    setNextPage(Number(e.target.id))
  }
  //debugger
   function handlePreviousBtn() {
      setNextPage(nextPage === 0 ? 0 : nextPage - 1)
   }

   function handleNextBtn() {
      setNextPage(nextPage === 8 ? 8 : nextPage + 1)
   }

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
        <Pagination 
        totalPages={characterData.length}
        clickPages={handlePageClick}
        previous={handlePreviousBtn}
        next={handleNextBtn}
        
        /> 
    </div>    
  )
}

export default App;
