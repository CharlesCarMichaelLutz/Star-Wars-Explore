import React from 'react';
import './index.css'
import axios from 'axios';
import  Table from './components/Table';
import  SearchBar from './components/SearchBar';
import  Pagination from './components/Pagination';



const App = () => {
  

  //const axios = require('axios');

  /*

  const getBreeds = async () => {
    return await axios({
      url: 'https://dog.ceo/api/breeds/list/all',
    })
  }

  (async () => {
    const breeds = await getBreeds()

      console.log(`Breed count: ${Object.entries(breeds.data.message).length}`)
  }) ()


  const getPlanets = async () => {
    return await axios({
      url: 'https://swapi.dev/api/planets/',
    })
  }

  (async () => {
    const planets = await getPlanets()

      console.log(planets.data.results[5])
  }) ()

  const getProducts = async () => {
    return await axios({
      url: 'https://fakestoreapi.com/products',
    })
  }

  (async () => {
    const products = await getProducts()

      console.log(products.data[6])
  }) ()

  
  let productsAPI = 'https://fakestoreapi.com/products'

  fetch(productsAPI)
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log(err))

       const cardData = data.results.map(data => {
      return <Card 
                key={} 
                name
      
      />
    })

  */

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
              name={}
              birthDate={}
              height={}
              mass={}
              homeWorld={}
              species={}  
        */
        /> 
        <br></br><br/>
        <Pagination />       
    </div>
    
  )
}

export default App;
