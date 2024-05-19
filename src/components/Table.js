import React, { useState } from "react";
import Pagination from "./Pagination";

const Table = ({ characterData }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const charactersPerPage = 10;

  const filterCharacters = characterData.filter((char) =>
    char.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const charactersRendered = filterCharacters.slice(
    pageNumber * charactersPerPage,
    (pageNumber + 1) * charactersPerPage
  );
  return (
    <main>
      <section className="search--container">
        <input
          type="text"
          className="search--bar"
          placeholder="Search Star"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setPageNumber(0);
          }}
        />
      </section>
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
          {charactersRendered.map((char) => (
            <tr key={char.name}>
              <td>{char.name}</td>
              <td>{char.birth_year}</td>
              <td>{char.height}</td>
              <td>{char.mass}</td>
              <td>{char.homeworld}</td>
              <td>{char.species}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        setPageNumber={setPageNumber}
        pageCount={Math.ceil(filterCharacters.length / charactersPerPage)}
      />
    </main>
  );
};

export default Table;
