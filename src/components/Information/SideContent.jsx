import './SideContent.scss';
import React from 'react';

function SideContent() {
  return (
    <div className="side-content">
      <div className="side-content__card border">
        <h3>제목</h3>
        <hr />
        <div className="side-content__content">ㅁㄴㅇ</div>
      </div>
      <div className="side-content__card border">
        <h3>제목</h3>
        <hr />
        <div className="side-content__content">ㅁㄴㅇ</div>
      </div>
    </div>
  );
}

export default SideContent;
