import React, { useState, useEffect } from 'react';
import './index.css'
import  Table from './components/Table';
import  SearchBar from './components/SearchBar';
import  Pagination from './components/Pagination';

const App = (props) => {
  
  const star_wars_API = 'https://swapi.dev/api/people/'
  const [characterData, setCharacterData] = useState([])
  const [nextPage, setNextPage] = useState()
  const [prevPage, setPrevPage] = useState()

  //When my app fires up getCharacters will fetch and receive the first 10 characters
  // and they will be populated in the table
  // I have the pagination bar living below 
  //which has number buttons and a Previous, and a Next button
  // both are connected to an onClick I have in the Pagination component through props
  //state is being held here in App.js

  useEffect(() => {  
    getCharacters(star_wars_API) 
  }, [])   

    const getCharacters = async (url) => {      
      await fetch(url)
        .then(async (res) =>  {
          const characterData = await res.json()
          //this is where my nextPage url is being saved into state initially
          //maybe I need to access/manipulate it right here in the useEffect ? 
          setNextPage(characterData.next)
          setPrevPage(characterData.previous)
          const characters1 = await getAdditionalData(characterData.results)
          setCharacterData(characters1)
        })   
    }
  
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

//nextPage === 8 ? 8 : nextPage + 1
  return (
    <div>
      <header>
        Star Wars Characters 
      </header>
      <div>
        <br/><br/>
        <SearchBar />
        <br/><br/>
      </div>
      <main>
        <Table newCharData={characterData}/> 
        <br/><br/>  
        <Pagination 
        totalPages={characterData.length}
        //clickPages={handlePageClick}
        previous={prevPage}
        next={nextPage}
        getCharacters={getCharacters}
        /> 
      </main>
    </div>    
  )
}

export default App;
