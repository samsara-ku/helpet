import React from 'react';
import { Link } from 'react-router-dom';
import ENV from '../../../env/var.json';
import './index.scss';

function Tags({ cidx }) {
  return (
    <div className="information__tags">
      {['산책', '주인', '행동'].map(e => (
        <Link to={`/articles/${cidx}`} key={e}>
          <span className="information__tags__tag boder">
            {ENV[cidx]} {e}
          </span>
        </Link>
      ))}
    </div>
  );
}

export default Tags;
