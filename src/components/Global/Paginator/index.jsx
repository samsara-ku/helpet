import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

function Paginator({ current, total, baseUrl }) {
  const clampNumber = (num, a, b) => Math.max(Math.min(num, Math.max(a, b)), Math.min(a, b));

  const generateView = () => {
    const resultElements = [];

    for (
      let i = clampNumber(current - 4, 1, total);
      i <= clampNumber(current + 4, current, total);
      i += 1
    ) {
      const element = (
        <Link key={i} to={`${baseUrl}/page/${i}`} className="paginator__item">
          <span>{i}</span>
        </Link>
      );

      resultElements.push(element);
    }

    return resultElements;
  };

  return <div className="paginator border">{generateView()}</div>;
}

export default Paginator;
