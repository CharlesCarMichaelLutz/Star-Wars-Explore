import React, { useState, useEffect } from 'react';
import './index.css'
import  Table from './components/Table';
import  SearchBar from './components/SearchBar';
import  Pagination from './components/Pagination';
import  {nanoid} from 'nanoid';

const App = (props) => {
  
  const star_wars_API = 'https://swapi.dev/api/people'
  const [characterData, setCharacterData] = useState([])
  const [nextPage, setNextPage] = useState()
  const [prevPage, setPrevPage] = useState()
  const [query, setQuery] = useState('')
  //const [currentPage, setCurrentPage] = useState()

  useEffect(() => {  
    getCharacters(star_wars_API + '?name=${query}') 
  }, [query])   

    const getCharacters = async (url) => {      
      await fetch(url)
        .then(async (res) =>  {
          const characterData = await res.json()
          setNextPage(characterData.next)
          setPrevPage(characterData.previous)
          //setCurrentPage(characterData)
          const additionalData = await getAdditionalData(characterData.results)
          setCharacterData(additionalData)
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
        return retrieve.name
      })     
    } 
  } 
    return characters
  }

  /*
  function changePage(e) {
    const pageNumber = Number(e.target.value)
    setCurrentPage(pageNumber)
  }
*/
  return (
    <div>
      <header>
        Star Wars Characters 
      </header>
      <div>
        <br/><br/>
        <SearchBar getQuery={(q) => setQuery(q)}/>
        <br/><br/>
      </div>
      <main>
        <Table newCharData={characterData}/> 
        <br/><br/>  
        <Pagination 
        totalPages={characterData.length}
        previous={prevPage}
        next={nextPage}
       //clickPages={changePage}
        getCharacters={getCharacters}
        /> 
      </main>
    </div>    
  )
}

export default App;
