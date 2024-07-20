import React from "react";
import style from "./pagination.module.css";

const Pagination = ({ currentPage, totalPages, handleClick }: any) => {
  const pageNumbers = [];

  // Calculate the range of page numbers to display
  let startPage = currentPage > 3 ? currentPage - 2 : 1;
  let endPage = currentPage + 2;

  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = endPage - 4 > 1 ? endPage - 4 : 1;
  }

  // Generate the array of page numbers
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
   
    <ul className={style.pagination_bg}>
      
      {currentPage -1 >= 1 && <button onClick={() => handleClick(currentPage-1)}>{"<"}</button>}
      {startPage > 1 && (
        <li onClick={() => handleClick(1)}>
          1
        </li>
      )}

      {startPage > 2 && (
        <li>
          <span>...</span>
        </li>
      )}

      {pageNumbers.map((number) => (
        <li
          key={number}
          className={`${number === currentPage ? " Paginationactive" : ""}`}
          onClick={() => handleClick(number)}
        >
          {number}
        </li>
      ))}

      {endPage < totalPages - 1 && (
        <li>
          <span>...</span>
        </li>
      )}

      {endPage < totalPages && (
        <li onClick={() => handleClick(totalPages)}>
          {totalPages}
        </li>
      )}
      {currentPage + 1 <= totalPages && <button onClick={() => handleClick(currentPage+1)}>{">"}</button>}
    </ul>
  );
};

export default Pagination;
