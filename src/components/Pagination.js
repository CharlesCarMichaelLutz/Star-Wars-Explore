import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({
  characterData,
  setPageNumber,
  searchTerm,
  charactersPerPage,
}) => {
  function changePage({ selected }) {
    setPageNumber(selected);
  }

  if (characterData.length !== 0) {
    const pageCount = Math.ceil(characterData.length / charactersPerPage);

    return (
      <ReactPaginate
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={`button-container`}
      />
    );
  }
};
export default Pagination;
