import React, { useState, useEffect } from 'react';
import './index.css'
import axios from 'axios'
import  Table from './components/Table';
import  SearchBar from './components/SearchBar';
import  Pagination from './components/Pagination';

const App = (props) => {
  
  const star_wars_API = 'https://swapi.dev/api/people/'
  const [displayPeople, setDisplayPeople] = useState([])

  useEffect(() => {
    getPeople()
  }, [])

  const getPeople = async () => {
    const response = await fetch(star_wars_API)

    setDisplayPeople(await response.json())
  }

  return (
    <div>
        <header>
        Star Wars Characters 
        </header>
        <br></br><br/>
        <SearchBar />
        <br></br><br/>
        <Table newDisplay={displayPeople}
        /> 
        <br></br><br/>
        <Pagination />    
    </div>
    
  )
}

export default App;
