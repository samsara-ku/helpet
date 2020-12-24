import './ShareBtn.scss';
import React, { useState } from 'react';
import ShareIcon from '@material-ui/icons/Share';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

function ShareBtn() {
  const [isShowShareOption, setIsShowShareOption] = useState(false);

  return (
    <div className="share-btn">
      <button
        type="button"
        onClick={() => {
          setIsShowShareOption(!isShowShareOption);
        }}
      >
        <ShareIcon />
      </button>
      {isShowShareOption && (
        <div className="share-option border">
          <button
            type="button"
            onClick={() => {
              console.log(123);
            }}
          >
            <FacebookIcon />
            Facebook
          </button>
          <button
            type="button"
            onClick={() => {
              console.log(123);
            }}
          >
            <TwitterIcon />
            Twitter
          </button>
        </div>
      )}
    </div>
  );
}

export default ShareBtn;
