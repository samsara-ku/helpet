import React, { useState } from 'react';
import ShareIcon from '@material-ui/icons/Share';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import './index.scss';

function Share() {
  const [isVisibleShare, setIsVisibleShare] = useState(false);

  return (
    <div className="share">
      <button
        type="button"
        onClick={() => {
          setIsVisibleShare(!isVisibleShare);
        }}
      >
        <ShareIcon />
      </button>
      {isVisibleShare && (
        <div className="share-option border">
          <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com">
            <FacebookIcon /> Facebook
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com">
            <TwitterIcon /> Twitter
          </a>
        </div>
      )}
    </div>
  );
}

export default Share;
