import React from 'react';

const ResultList = ({ searchResults }) => {
  return (
    <div>
      <h2>Search Result</h2>
      <ul>
        {searchResults.map((user) => (
          <li key={user.id}>{user.firstName}</li>
        ))}
      </ul>
    </div>
  );
};

export default ResultList;
