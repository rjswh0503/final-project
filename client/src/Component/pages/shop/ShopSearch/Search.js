import React, { useState } from 'react';
import axios from 'axios';
import '../../shop/css/ShopMain.css';
import SearchResult from './SearchResult';

const Search = () => {
  const [productName, setProductName] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/shop/main/search/${productName}`);
      setSearchResults(response.data);
      setCurrentPage(1); // 새로운 검색 시 첫 페이지로 리셋
      console.log('검색 결과:', response.data);
    } catch (error) {
      console.error('검색 중 오류 발생:', error);
    }
  };

  const handleDetailClick = (productId) => {
    window.location.href = `/shop/detail/${productId}`;
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  

  return (
    <>
      <div>
        <div >
          <div className='search-btn'>
            <input
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              placeholder="검색어를 입력하세요"
              style={{
                padding: '10px',
                borderRadius: '20px',
                border: '1px solid #ccc',
              }}
            />
            <button
              type="button"
              onClick={handleSearch}
              style={{
                marginLeft: '10px',
                padding: '10px',
                borderRadius: '20px',
                backgroundColor: '#FEA92A',
                color: '#fff',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              검색
            </button>
          </div>
        </div>
      </div>
      <>
        <div style={{marginTop:'100px', marginBottom:'60px'}}>
          <SearchResult
            searchResults={searchResults}
            currentPage={currentPage}
            handleDetailClick={handleDetailClick}  // 필요한 경우 해당 함수를 전달
            paginate={paginate}
          />
        </div>
      </>
    </>

  );
};

export default Search;