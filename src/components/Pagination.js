import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ setPageNumber, pageCount }) => {
  return (
    <ReactPaginate
      pageCount={pageCount}
      containerClassName={`button-container`}
      onPageChange={(event) => setPageNumber(event.selected)}
    />
  );
};

export default Pagination;
