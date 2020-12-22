import './Search.scss';
import React, { useState } from 'react';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import SearchIcon from '@material-ui/icons/Search';
import SearchForm from '../SearchForm';

const initialState = {
  isFocus: false,
};
function Search() {
  const [state, setState] = useState(initialState);

  const onSearchHandler = () => {
    setState({ ...state, isFocus: !state.isFocus });
  };

  const onFocusInput = () => {};

  return (
    <div className="search">
      <SearchForm onClick={onSearchHandler} onFocusInput={onFocusInput} />

      <div className="search__history">
        <div className="search__history__words">
          {[1123213, 111111, 3123121312].map(e => (
            <div className="search__history__word">
              <QueryBuilderIcon />
              <span>{e}</span>
            </div>
          ))}
          {[1, 2, 3].map(e => (
            <div className="search__history__word">
              <SearchIcon />
              <span>{e}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Search;
