import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../scss/main/FrontSlider.scss";

const FrontSlider = () => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
    };

    return (
        <section className="front-slider">
            <Slider {...settings} className="front-slider-items">
                <div className="front-slider-item item-1">
                    <div className="front-slider-item-wrap">
                        <div className="desc">
                            <b>EVENT</b>
                            <h1>
                                11월 신규회원 할인혜택!
                                <br /> 무료 클래스부터 얼리버드 할인까지
                            </h1>
                            <span>2022.11.1~11.30</span>
                        </div>
                        <div className="pic">
                            <img src="images/ct-front-01.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="front-slider-item item-2">
                    <div className="front-slider-item-wrap">
                        <div className="desc">
                            <b>추천 학습 로드맵</b>
                            <h1>
                                웹 퍼프리싱 입문부터 중상급까지
                                <br /> 취업 로드맵
                            </h1>
                        </div>
                        <div className="pic">
                            <img src="images/ct-front-02.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="front-slider-item item-3">
                    <div className="front-slider-item-wrap">
                        <div className="desc">
                            <b>A to Z</b>
                            <h1>
                                누구나 쉽게 이해하는 웹개발
                                <br /> 수강생에게 인정받은 검증된 강의들
                            </h1>
                            <span>2022.11.1~11.30</span>
                        </div>
                        <div className="pic">
                            <img src="images/ct-front-03.png" alt="" />
                        </div>
                    </div>
                </div>
            </Slider>
        </section>
    );
};

export default FrontSlider;
