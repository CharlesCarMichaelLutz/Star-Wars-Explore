import React, { useState, useEffect } from 'react';
import './index.css'
import  Table from './components/Table';
import  Pagination from './components/Pagination';
import  Header from './components/Header';
import  Spinner from './img/spinner.gif';

const App = () => {
  
  const star_wars_API = 'https://swapi.dev/api/people'
  const [characterData, setCharacterData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [nextPage, setNextPage] = useState()
  const [prevPage, setPrevPage] = useState()
  
  useEffect(() => { 
    getCharacters(star_wars_API) 
  }, [])

    const getCharacters = async (url) => {      
      await fetch(url)
        .then(async (res) =>  {
          const characterData = await res.json()
          setNextPage(characterData.next)
          setPrevPage(characterData.previous)
          const additionalData = await getAdditionalData(characterData.results)
          setCharacterData(additionalData)
          setIsLoading(false)
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

  return (
    isLoading ? <img 
    src={Spinner} 
    style={{width: '200px', margin: 'auto', display: 'block'}}
    alt='Loading'/> :
    <div>
        <Header />
        <br></br><br></br>
        <Table 
        characterData={characterData}
        isLoading={isLoading}/> 
        <Pagination 
        previous={prevPage}
        next={nextPage}
        getCharacters={getCharacters}
        /> 
    </div> 
  )
}
export default App;
