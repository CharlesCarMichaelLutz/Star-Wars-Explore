import React, { useState } from "react";
import Pagination from "./Pagination";

const Table = ({ characterData }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const charactersPerPage = 10;
  const charactersViewed = pageNumber * charactersPerPage;

  return (
    <main>
      <section className="search--container">
        <input
          type="text"
          className="search--bar"
          placeholder="Search Star"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </section>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Birth Year</th>
            <th>Height</th>
            <th>Mass</th>
            <th>Planet</th>
            <th>Species</th>
          </tr>
        </thead>
        <tbody>
          {characterData
            .filter((char) => {
              if (searchTerm === "") {
                return char;
              } else if (
                char.name.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return char;
              }
            })
            .slice(charactersViewed, charactersViewed + charactersPerPage)
            .map((char) => {
              return (
                <tr key={char.name}>
                  <td>{char.name}</td>
                  <td>{char.birth_year}</td>
                  <td>{char.height}</td>
                  <td>{char.mass}</td>
                  <td>{char.homeworld}</td>
                  <td>{char.species}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <Pagination
        searchTerm={searchTerm}
        setPageNumber={setPageNumber}
        characterData={characterData}
        charactersPerPage={charactersPerPage}
      />
    </main>
  );
};

export default Table;
