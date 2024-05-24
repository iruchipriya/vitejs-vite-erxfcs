import React, { useEffect, useState } from 'react';
import ResultList from './ResultList';
import Pagination from './Pagination';

const SearchPage = () => {
  const API_URL = 'https://testapi.devtoolsdaily.com/users';
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [totalPages, setTotalPages] = useState(0);
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageData, setCurrentPageData] = useState([]);

  const fetchData = (url) => {
    fetch(`${url}`)
      .then((response) => {
        return response.json();
      })
      .then((resp) => {
        console.log(resp);
        setData(resp);
        setSearchResults(resp);
        setTotalPages(Math.ceil(resp.length / 10));
      })
      .catch((error) => {
        console.log('Error', error);
      });
  };

  useEffect(() => {
    fetchData(API_URL);
  }, []);

  const handleSearch = () => {
    const filterData = data.filter((item) => {
      return item.firstName.toLowerCase().includes(searchQuery.toLowerCase());
    });
    setSearchResults(filterData);
    setTotalPages(Math.ceil(filterData.length / 10));
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleClear = () => {
    setSearchQuery('');
    setCurrentPage(1);
    fetchData(API_URL);
  };

  useEffect(() => {
    const startIndex = (currentPage - 1) * 10;
    const endIndex = startIndex + 10;
    const currentData = searchResults.slice(startIndex, endIndex);
    setCurrentPageData(currentData);
  }, [currentPage, searchResults]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search.."
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
      ></input>
      <button onClick={handleSearch}>Search</button>
      <button onClick={handleClear}>Clear</button>

      <ResultList searchResults={currentPageData} />
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default SearchPage;
