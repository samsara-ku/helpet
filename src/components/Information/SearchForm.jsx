/* eslint-disable react/prop-types */
import './SearchForm.scss';
import React from 'react';
import SearchIcon from '@material-ui/icons/Search';

function SearchForm({ onClick, onFocusInput, onBlurInput }) {
  return (
    <div className="search-form">
      <input
        type="text"
        placeholder="궁금한게 있나요? 검색해주세요"
        onFocus={onFocusInput}
        onBlur={onBlurInput}
      />
      <button type="button" onClick={onClick}>
        <SearchIcon />
      </button>
    </div>
  );
}

export default SearchForm;
