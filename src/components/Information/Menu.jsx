import React, { useState } from 'react';
import './Menu.scss';
import CloudIcon from '@material-ui/icons/Cloud';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

function Header() {
  const [expand, setExpand] = useState(false);

  return (
    <div className="menu">
      <div className="menu__row">
        <div className="menu__col">
          <div className="menu__col__logo">
            <CloudIcon />
          </div>
        </div>
        <div className="menu__col">
          <div className="menu__col__choice">
            강아지 연구소
            <ArrowDropDownIcon />
            <div className="menu__hidden">
              <div className="menu__hidden-col">
                <div className="menu__hidden-choice">12345</div>
                <div className="menu__hidden-choice">12345</div>
                <div className="menu__hidden-choice">12345</div>
                <div className="menu__hidden-choice">12345</div>
                <div className="menu__hidden-choice">12345</div>
              </div>
              <div className="menu__hidden-col">
                <div className="menu__hidden-post">
                  <div className="post-col">
                    <img src="../../../p" alt="" />
                  </div>
                  <div className="post-col">
                    <div className="title">제목</div>
                    <div className="contents">
                      내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.
                      내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.
                    </div>
                  </div>
                </div>
                <div className="menu__hidden-post">
                  <div className="post-col">
                    <img src="../../../p" alt="" />
                  </div>
                  <div className="post-col">
                    <div className="title">제목</div>
                    <div className="contents">
                      내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.
                      내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.
                    </div>
                  </div>
                </div>
                <div className="menu__hidden-post">
                  <div className="post-col">
                    <img src="../../../p" alt="" />
                  </div>
                  <div className="post-col">
                    <div className="title">제목</div>
                    <div className="contents">
                      내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.
                      내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="menu__col__choice">
            고양이 연구소
            <ArrowDropDownIcon />
            <div className="menu__hidden">
              <div className="menu__hidden-col">
                <div className="menu__hidden-choice">12345</div>
                <div className="menu__hidden-choice">12345</div>
                <div className="menu__hidden-choice">12345</div>
                <div className="menu__hidden-choice">12345</div>
                <div className="menu__hidden-choice">12345</div>
              </div>
              <div className="menu__hidden-col">
                <div className="menu__hidden-post">
                  <div className="post-col">
                    <img src="../../../p" alt="" />
                  </div>
                  <div className="post-col">
                    <div className="title">제목</div>
                    <div className="contents">
                      내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.
                      내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.
                    </div>
                  </div>
                </div>
                <div className="menu__hidden-post">
                  <div className="post-col">
                    <img src="../../../p" alt="" />
                  </div>
                  <div className="post-col">
                    <div className="title">제목</div>
                    <div className="contents">
                      내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.
                      내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.
                    </div>
                  </div>
                </div>
                <div className="menu__hidden-post">
                  <div className="post-col">
                    <img src="../../../p" alt="" />
                  </div>
                  <div className="post-col">
                    <div className="title">제목</div>
                    <div className="contents">
                      내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.
                      내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="menu__col__choice">
            생활 연구소
            <ArrowDropDownIcon />
            <div className="menu__hidden">
              <div className="menu__hidden-col">
                <div className="menu__hidden-choice">12345</div>
                <div className="menu__hidden-choice">12345</div>
                <div className="menu__hidden-choice">12345</div>
                <div className="menu__hidden-choice">12345</div>
                <div className="menu__hidden-choice">12345</div>
              </div>
              <div className="menu__hidden-col">
                <div className="menu__hidden-post">
                  <div className="post-col">
                    <img src="../../../p" alt="" />
                  </div>
                  <div className="post-col">
                    <div className="title">제목</div>
                    <div className="contents">
                      내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.
                      내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.
                    </div>
                  </div>
                </div>
                <div className="menu__hidden-post">
                  <div className="post-col">
                    <img src="../../../p" alt="" />
                  </div>
                  <div className="post-col">
                    <div className="title">제목</div>
                    <div className="contents">
                      내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.
                      내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.
                    </div>
                  </div>
                </div>
                <div className="menu__hidden-post">
                  <div className="post-col">
                    <img src="../../../p" alt="" />
                  </div>
                  <div className="post-col">
                    <div className="title">제목</div>
                    <div className="contents">
                      내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.
                      내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="menu__col__choice">
            몰라 연구소
            <ArrowDropDownIcon />
            <div className="menu__hidden">
              <div className="menu__hidden-col">
                <div className="menu__hidden-choice">12345</div>
                <div className="menu__hidden-choice">12345</div>
                <div className="menu__hidden-choice">12345</div>
                <div className="menu__hidden-choice">12345</div>
                <div className="menu__hidden-choice">12345</div>
              </div>
              <div className="menu__hidden-col">
                <div className="menu__hidden-post">
                  <div className="post-col">
                    <img src="../../../p" alt="" />
                  </div>
                  <div className="post-col">
                    <div className="title">제목</div>
                    <div className="contents">
                      내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.
                      내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.
                    </div>
                  </div>
                </div>
                <div className="menu__hidden-post">
                  <div className="post-col">
                    <img src="../../../p" alt="" />
                  </div>
                  <div className="post-col">
                    <div className="title">제목</div>
                    <div className="contents">
                      내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.
                      내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.
                    </div>
                  </div>
                </div>
                <div className="menu__hidden-post">
                  <div className="post-col">
                    <img src="../../../p" alt="" />
                  </div>
                  <div className="post-col">
                    <div className="title">제목</div>
                    <div className="contents">
                      내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.
                      내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="menu__col__choice">
            히히 연구소
            <ArrowDropDownIcon />
            <div className="menu__hidden">
              <div className="menu__hidden-col">
                <div className="menu__hidden-choice">12345</div>
                <div className="menu__hidden-choice">12345</div>
                <div className="menu__hidden-choice">12345</div>
                <div className="menu__hidden-choice">12345</div>
                <div className="menu__hidden-choice">12345</div>
              </div>
              <div className="menu__hidden-col">
                <div className="menu__hidden-post">
                  <div className="post-col">
                    <img src="../../../p" alt="" />
                  </div>
                  <div className="post-col">
                    <div className="title">제목</div>
                    <div className="contents">
                      내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.
                      내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.
                    </div>
                  </div>
                </div>
                <div className="menu__hidden-post">
                  <div className="post-col">
                    <img src="../../../p" alt="" />
                  </div>
                  <div className="post-col">
                    <div className="title">제목</div>
                    <div className="contents">
                      내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.
                      내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.
                    </div>
                  </div>
                </div>
                <div className="menu__hidden-post">
                  <div className="post-col">
                    <img src="../../../p" alt="" />
                  </div>
                  <div className="post-col">
                    <div className="title">제목</div>
                    <div className="contents">
                      내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.
                      내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
