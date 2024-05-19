import React, { useState, useEffect } from "react";
import "./index.css";
import Table from "./components/Table";
import Header from "./components/Header";
import axios from "axios";

const App = () => {
  const [characterData, setCharacterData] = useState([]);

  useEffect(() => {
    getCharacters();
  }, []);

  async function getCharacters() {
    const characterPages = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const speciesPages = [1, 2, 3, 4];
    const planetPages = [1, 2, 3, 4, 5, 6];

    const characters = (
      await Promise.all(
        characterPages.map(async (page) => {
          const response = await axios.get(
            `https://swapi.py4e.com/api/people/?page=${page}`
          );
          return response.data.results;
        })
      )
    ).flat();

    let tempSpecies = (
      await Promise.all(
        speciesPages.map(async (page) => {
          const response = await axios.get(
            `https://swapi.py4e.com/api/species/?page=${page}`
          );
          return response.data.results;
        })
      )
    ).flat();

    let tempPlanets = (
      await Promise.all(
        planetPages.map(async (page) => {
          const response = await axios.get(
            `https://swapi.py4e.com/api/planets/?page=${page}`
          );
          return response.data.results;
        })
      )
    ).flat();

    tempSpecies = arrayToObject(tempSpecies);
    tempPlanets = arrayToObject(tempPlanets);

    for (const char of characters) {
      char.homeworld = tempPlanets[char.homeworld];
      char.species =
        char.species.length === 0 ? "Human" : tempSpecies[char.species[0]];
    }

    setCharacterData(characters);
  }

  function arrayToObject(array) {
    let obj = {};
    for (let item of array) {
      obj[item["url"]] = item["name"];
    }
    return obj;
  }

  return (
    <div>
      <Header />
      <Table characterData={characterData} />
    </div>
  );
};
export default App;
