import './Search.css';
import React, { useEffect, useRef, useState } from 'react';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import SearchIcon from '@material-ui/icons/Search';

import { Power3, TimelineLite } from 'gsap';
import CSSPlugin from 'gsap/CSSPlugin';
import SearchForm from './SearchForm';

// eslint-disable-next-line no-unused-vars
const C = CSSPlugin;

function Search() {
  const [isHistoryVisible, setIsHistoryVisible] = useState(false);

  const backgroundRef = useRef(null);
  const historyRef = useRef(null);

  const onSearchHandler = () => {
    console.log(123);
  };

  const tl = new TimelineLite();

  useEffect(() => {
    if (isHistoryVisible) {
      tl.fromTo(
        backgroundRef.current,
        { opacity: 0, display: 'block' },
        {
          opacity: 1,
          duration: 0.7,
          ease: Power3.easeOut,
        },
        '0'
      ).fromTo(
        historyRef.current,
        {
          opacity: 0,
          height: 0,
        },
        { opacity: 1, height: 300, duration: 0.7, ease: Power3.easeOut },
        '-=0.7'
      );
    } else {
      tl.to(backgroundRef.current, {
        opacity: 0,
        duration: 0.7,
        ease: Power3.easeOut,
        display: 'none',
      }).to(
        historyRef.current,

        {
          opacity: 0,
          height: 0,
          duration: 0.5,
        },
        '-=0.5'
      );
    }
    return () => {
      tl.clear();
    };
  }, [isHistoryVisible]);

  const onFocusInput = () => {
    setIsHistoryVisible(true);
  };

  const onBlurInput = () => {
    setIsHistoryVisible(false);
  };

  return (
    <>
      <div className="search__background" ref={backgroundRef} />
      <div className="search">
        <div className="search__theme">
          <SearchForm
            onClick={onSearchHandler}
            onFocusInput={onFocusInput}
            onBlurInput={onBlurInput}
          />

          <div className="search__history" ref={historyRef}>
            <div className="search__history__words">
              {[1123213, 111111, 3123121312].map(e => (
                <div key={e} className="search__history__word">
                  <QueryBuilderIcon />
                  <span>{e}</span>
                </div>
              ))}
              {[1, 2, 3].map(e => (
                <div key={e} className="search__history__word">
                  <SearchIcon />
                  <span>{e}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;
