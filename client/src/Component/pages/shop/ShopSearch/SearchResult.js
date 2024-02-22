import React, { useState } from 'react';
import '../../shop/css/ShopMain.css';
import Pagination from 'react-js-pagination';



const SearchResult = ({ searchResults, currentPage, handleDetailClick, paginate }) => {
    const itemsPerPage = 5;
  
    // 검색 결과가 없을 때 초기화
    if (searchResults === undefined) {
      return null; // 렌더링을 중단하고 아무것도 표시하지 않도록 변경
    }
  
    if (searchResults.length === 0) {
      return (
        <div className='searchResult'>
          <p>검색결과 없습니다.</p>
        </div>
      );
    }
  
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = searchResults.slice(indexOfFirstItem, indexOfLastItem);
  
    return (
      <div className='searchResult'>
        {searchResults.length > 0 && (
          <>
            <div style={{ paddingTop: '20px', marginBottom: '50px', textAlign: 'center', display: 'flex', justifyContent: 'flex-end' }}>
              <h2 style={{ color: '#FEA92A' }}>{searchResults.length}<span style={{ color: 'black' }}>개의 상품검색</span></h2>
            </div>
  
            <ul className='swiper-wrapper'>
              <p><b>총{searchResults.length}개</b></p>
              {currentItems.map((product) => (
                <li className='swiper-slide swiper-slide-active' style={{
                  width: "272.5px",
                  marginRight: "30px",
                  marginTop: '30px',
                }} key={product.productId}>
                  <div className='imgWrap'>
                    <img src={product.productThumbnail} className="imgs" alt={product.productName} onClick={() => handleDetailClick(product.productId)} />
                  </div>
                  <div className="textWrap">
                    <p style={{ fontSize: '20px' }} className="companyName"><b>{product.productName}</b></p>
                    <p className="itemName1">{product.productDescription}</p>
                    <div className="itemsPrice clearfix">
                      <div className="fr">
                        <strong className="sellPrice">{product.formattedProductPrice}</strong>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div style={{ textAlign: 'center' }}>
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={itemsPerPage}
                totalItemsCount={searchResults.length}
                pageRangeDisplayed={5}
                onChange={paginate}
              />
            </div>
          </>
        )}
      </div>
    );
  };
  
  export default SearchResult;