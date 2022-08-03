import React, { useState, useEffect } from 'react';
import './index.css'
import  Table from './components/Table';
import  SearchBar from './components/SearchBar';
import  Pagination from './components/Pagination';

const App = (props) => {
  
  const star_wars_API = 'https://swapi.dev/api/people/'
  const [characterData, setCharacterData] = useState([])
  const [nextPage, setNextPage] = useState(1)

  //When my app fires up getCharacters will fetch and receive the first 10 characters
    // and they will be populated in the table
      // I have the pagination bar living below 
        //which has number buttons and a Previous, and a Next button
          // both are connected to an onClick I have in the Pagination component through props
            //state is being held here in App.js

  useEffect(() => {    
    const getCharacters = async () => {      
      await fetch(star_wars_API)
        .then(async (res) =>  {
          const characterData = await res.json()
          //this is where my nextPage url is being saved into state initially
            //maybe I need to access/manipulate it right here in the useEffect ? 
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
/*
  const handlePageClick = (e) => {
    setNextPage(Number(e.target.id))
  }
  */

  // when Previous buttton is clicked
    //this gets fired
   function handlePreviousBtn() {
      //the callback of setNextPage will map over the nextPage array
      setNextPage(nextPage.map(async prev =>{
        //url from state will be fetched with the variable below
        const twoPage = await fetch(prev.characterData.previous)
          //previous page will be populated in the table
        return twoPage.previous
      }   
      ))
   }
   // when Next buttton is clicked
    //this gets fired
   function handleNextBtn() {
      //the callback of setNextPage will map over the nextPage array
      setNextPage(nextPage.map(async next => {
        //url from state will be fetched with the variable below
        const onePage = await fetch(next.characterData)
          //previous page will be populated in the table
        return onePage.next
      }     
        ))
   }
//nextPage === 8 ? 8 : nextPage + 1
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
        //clickPages={handlePageClick}
        previous={handlePreviousBtn}
        next={handleNextBtn}
        
        /> 
    </div>    
  )
}

export default App;
