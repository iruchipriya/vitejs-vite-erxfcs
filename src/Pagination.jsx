import React from 'react';

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  // const buttonStyle = {
  //   marginRight: '5px',
  //   backgroundColor: 'yellow',
  // };
  return (
    <div>
      <ul>
        {pageNumbers.map((num) => (
          <button
            onClick={() => onPageChange(num)}
            // className={currentPage === num ? 'buttonStyle' : {}}
            style={{
              marginRight: '5px',
              backgroundColor: num === currentPage ? 'yellow' : 'transparent',
            }}
          >
            {num}
          </button>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
