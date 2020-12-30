import React, { useState } from 'react';
import './Menu.scss';
import CloudIcon from '@material-ui/icons/Cloud';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import HiddenMenu from './HiddenMenu';

function Header() {
  const mockData1 = '12345';
  const mockData2 = {
    title: '제목',
    description:
      '내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.',
    imgSrc: 'https://cdn.pixabay.com/photo/2020/06/30/22/34/dog-5357794__340.jpg',
  };

  const [hover, setHover] = useState([false, false, false]);

  const handleHover = index => {
    setHover(hover.map((e, i) => (i === index ? !e : e)));
  };

  return (
    <div className="menu">
      <div className="menu__row">
        <div className="menu__col">
          <div className="menu__col__logo">
            <CloudIcon />
          </div>
        </div>
        <div className="menu__col">
          <div
            className="menu__col__choice"
            onMouseEnter={() => handleHover(0)}
            onMouseLeave={() => setHover([false, false, false])}
          >
            강아지 연구소
            <ArrowDropDownIcon />
            <HiddenMenu
              category={new Array(5).fill(mockData1)}
              post={new Array(3).fill(mockData2)}
              visible={hover[0]}
            />
          </div>
          <div
            className="menu__col__choice"
            onMouseEnter={() => handleHover(1)}
            onMouseLeave={() => setHover([false, false, false])}
          >
            고양이 연구소
            <ArrowDropDownIcon />
            <HiddenMenu
              category={new Array(5).fill(mockData1)}
              post={new Array(3).fill(mockData2)}
              visible={hover[1]}
            />
          </div>
          <div
            className="menu__col__choice"
            onMouseEnter={() => handleHover(2)}
            onMouseLeave={() => setHover([false, false, false])}
          >
            생활 연구소
            <ArrowDropDownIcon />
            <HiddenMenu
              category={new Array(5).fill(mockData1)}
              post={new Array(3).fill(mockData2)}
              visible={hover[2]}
            />
          </div>
          <div className="menu__col__choice">몰라 연구소</div>
          <div className="menu__col__choice">히히 연구소</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
