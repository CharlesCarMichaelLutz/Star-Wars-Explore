import React, { useState, useEffect } from 'react';
import './index.css'
import axios from 'axios';
import  Table from './components/Table';
import  SearchBar from './components/SearchBar';
import  Pagination from './components/Pagination';

const App = (props) => {
  
  //const axios = require('axios');

  //const [displayPeople, setDisplayPeople] = useState([])

  const getPeople = async () => {
    return await axios({
      url: 'https://swapi.dev/api/planets/',
    })
  }

  (async () => {
    const people = await getPeople()
    const result = people.data.results
    console.log(result)
  }) ()

  //useEffect(() =>{
 
  //}, [])

  return (
    <div>
        <header>
        Star Wars Characters 
        </header>
        <br></br><br/>
        <SearchBar />
        <br></br><br/>
        <Table 
        /*
              name={hero.name}
              birthDate={hero.birthDate}
              height={hero.height}
              mass={hero.mass}
              homeWorld={hero.homeworld}
              species={hero.species}  
        */
        /> 
        <br></br><br/>
        <Pagination />    
    </div>
    
  )
}

export default App;
