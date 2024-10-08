import React, { useState } from "react";
import "../../scss/main/Header.scss";

const Header = () => {
    const [isMegaNaviVisible, setMegaNaviVisible] = useState(false);

    const handleToggleMegaNavi = (e) => {
        e.preventDefault();
        setMegaNaviVisible(!isMegaNaviVisible);
    };

    return (
        <header>
            <div className="header-inner">
                <div className="logo-search">
                    <div className="logo">
                        <a href="#">
                            <img
                                src="images/logo-beyond-insight.png"
                                alt="홈페이지 로고"
                            />
                        </a>
                    </div>
                    <div className="search">
                        <input
                            type="text"
                            placeholder="어떤 강의를 찾으시나요?"
                        />
                        <img src="images/bi-search.svg"></img>
                    </div>
                    <div className="login-register-buttons">
                        <button className="btn-login">로그인</button>
                        <button className="btn-register">회원가입</button>
                    </div>
                    <div className="user-alarm">
                        <span className="cart">
                            <i class="bi bi-cart"></i> <em data-count="2"></em>
                        </span>
                        <span className="alarm">
                            <i class="bi bi-bell"></i> <em data-count="9"></em>
                        </span>
                        <span className="avatar">
                            <img src="images/mentor-avatar-21.jpg" alt="" />
                        </span>
                    </div>
                </div>
                <div className="gnb">
                    <a
                        className="trigger"
                        href="#"
                        onClick={handleToggleMegaNavi}
                    >
                        전체 카테고리
                    </a>
                    <a href="#">베스트 클래스</a>
                    <a href="#">이벤트</a>
                    <a href="#">새로운 클래스</a>
                    <a href="#">신규 회원 혜택</a>
                    <a href="#">시그니쳐 클래스</a>
                </div>
            </div>
            <div className={`mega-navi ${isMegaNaviVisible ? 'visible' : ''}`}>
                <div className="mega-navi-inner">
                    <div className="mega-navi-item">
                        <b>개발·프로그래밍</b>
                        <div className="mega-navi-item-wrap">
                            <a href="#">웹 개발</a>
                            <a href="#">프론트엔드</a>
                            <a href="#">백엔드</a>
                            <a href="#">모바일 앱 개발</a>
                            <a href="#">데이터베이스</a>
                            <a href="#">게임 개발</a>
                            <a href="#">자격증</a>
                        </div>
                    </div>
                    <div className="mega-navi-item">
                        <b>운동·건강</b>
                        <div className="mega-navi-item-wrap">
                            <a href="#">요가</a>
                            <a href="#">필라테스</a>
                            <a href="#">발레</a>
                            <a href="#">스트레칭·자세 개선</a>
                            <a href="#">피티니스</a>
                            <a href="#">러닝·사이클</a>
                        </div>
                    </div>
                    <div className="mega-navi-item">
                        <b>학문·외국어</b>
                        <div className="mega-navi-item-wrap">
                            <a href="#">영어</a>
                            <a href="#">중국어</a>
                            <a href="#">일본어</a>
                            <a href="#">독일어</a>
                            <a href="#">스페인어</a>
                            <a href="#">외국어 시험</a>
                        </div>
                    </div>
                    <div className="mega-navi-item">
                        <b>라이프스타일</b>
                        <div className="mega-navi-item-wrap">
                            <a href="#">뷰티</a>
                            <a href="#">명상</a>
                            <a href="#">심리</a>
                            <a href="#">타로·사주·운세</a>
                            <a href="#">게임·e스포츠</a>
                            <a href="#">반려동물</a>
                            <a href="#">인문학</a>
                        </div>
                    </div>
                    <div className="mega-navi-item">
                        <b>창업·재테크</b>
                        <div className="mega-navi-item-wrap">
                            <a href="#">국내 쇼핑몰</a>
                            <a href="#">해외 쇼핑몰</a>
                            <a href="#">블로그</a>
                            <a href="#">유튜브</a>
                            <a href="#">전자책·디지털파일</a>
                            <a href="#">쉐어하우스·숙박업</a>
                            <a href="#">요식업</a>
                        </div>
                    </div>
                    <div className="mega-navi-item">
                        <b>사진·영상</b>
                        <div className="mega-navi-item-wrap">
                            <a href="#">유튜브</a>
                            <a href="#">디자인</a>
                            <a href="#">포토샵</a>
                            <a href="#">스마트폰</a>
                            <a href="#">사진촬영</a>
                            <a href="#">영상편집</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
