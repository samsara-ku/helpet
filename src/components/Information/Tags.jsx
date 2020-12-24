import './Tags.scss';
import React from 'react';
import { Link } from 'react-router-dom';

function Tags() {
  return (
    <div className="tags">
      {['강아지 산책', '강아지 주인', '강아지 행동'].map(e => (
        <Link to="/" key={e}>
          <span className="tags__tag boder">{e}</span>
        </Link>
      ))}
    </div>
  );
}

export default Tags;
