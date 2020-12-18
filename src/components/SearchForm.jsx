/* eslint-disable react/prop-types */
import './SearchForm.css';
import React from 'react';
import SearchIcon from '@material-ui/icons/Search';

function SearchForm({ onClick, onFocusInput }) {
  return (
    <div className="search-form">
      <input type="text" placeholder="궁금한게 있나요? 검색해주세요" onFocus={onFocusInput} />
      <button type="button" onClick={onClick}>
        <SearchIcon />
      </button>
    </div>
  );
}

export default SearchForm;
