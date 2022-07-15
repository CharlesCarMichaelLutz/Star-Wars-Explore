import React, { useState, useEffect } from 'react';
import './index.css'
//import axios from 'axios'
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

  useEffect(() => {
    getStarWarsInfo()  
  }, [])

const getStarWarsInfo = async () => {

/*
  const characters  = fetch(star_wars_API)
                      .then(res => res.json())
                      .then(res => res.results)  
*/

const characters  = fetch(star_wars_API).then(res => {
                  return  res.json()
                  }).then(res => {
                    return fetch(res.json() + "https://swapi.dev/api/people/?page=2")
                  }).then(res => {
                    return res.json()
                  }).then(res => {
                    return fetch(res + "https://swapi.dev/api/people/?page=3")
                  }).then(res => {
                    return res.json()
                  }).then(res => {
                    return fetch(res + "https://swapi.dev/api/people/?page=4")
                  }).then(res => {
                    return res.json()
                  }).then(res => {
                    return fetch(res + "https://swapi.dev/api/people/?page=5")
                  }).then(res => {
                    return res.json()
                  }).then(res => {
                    return fetch(res + "https://swapi.dev/api/people/?page=6")
                  }).then(res => {
                    return res.json()
                  }).then(res => {
                    return fetch(res + "https://swapi.dev/api/people/?page=7")
                  }).then(res => {
                    return res.json()
                  }).then(res => {
                    return fetch(res + "https://swapi.dev/api/people/?page=8")
                  }).then(res => {
                    return res.json()
                  }).then(res => {
                    return fetch(res + "https://swapi.dev/api/people/?page=9")
                  })
                  
  const planet = fetch(homeworld_API)
                    .then(res => res.json())
                    .then(res => res.results)  
  
  const species = fetch(species_API)
                    .then(res => res.json())
                    .then(res => res.results)

  const one = await Promise.all([characters])
  const two = await Promise.all([planet])
  const three = await Promise.all([species])

  setCharacterData(one)
  setPlanetData(two)
  setSpeciesData(three)

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
               newPlanetData={planetData}
               newSpeciesData={speciesData}
        /> 
        <br></br><br/>
        <Pagination />    
    </div>    
  )
}

export default App;
