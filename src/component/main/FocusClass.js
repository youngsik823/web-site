import React from "react";
import "../../scss/main/FocusClass.scss";
import Slider from "react-slick";

const FocusClass = () => {
    const settings = {
        slidesToShow: 4,
        slidesToScroll: 2,
        arrows: true,
        dots: false,
    };

    return (
        <section className="focus-class">
            <div className="focus-class-inner">
                <div className="focus-class-content">
                    <div className="front-header">
                        <h2>강의 그 이상의 인사이트</h2>
                        <a href="#" className="btn-view-items">
                            전체 클래스 보기
                        </a>
                    </div>
                    <Slider {...settings} className="focus-class-items">
                        <div className="focus-class-item">
                            <div className="thum">
                                <img src="/images/best-class-main-cover-06.png" />
                                <em className="like active"></em>
                                <span className="badge discount">30% 할인</span>
                            </div>
                            <div className="desc">
                                <div className="overview">
                                    <h4>
                                        [2022년 출제기준] 웹디자인기능사
                                        실기시험 완벽 가이드
                                    </h4>
                                    <div className="class-info">
                                        사과코딩 ·80강 ·16시간 30분
                                    </div>
                                    <div className="class-price">
                                        <span className="sale">30%</span>
                                        <span className="price-prev">
                                            132,000원
                                        </span>
                                        <span className="price-current">
                                            92,400원
                                        </span>
                                    </div>
                                    <div className="class-review">
                                        <span className="stars">
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-half"></i>
                                        </span>
                                        <span className="rating">4.9</span>
                                        <span className="trainee">
                                            1,234명 수강
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="focus-class-item">
                            <div className="thum">
                                <img src="/images/basic-class-main-cover-05.png" />
                                <em className="like active"></em>
                                <span className="badge discount">30% 할인</span>
                            </div>
                            <div className="desc">
                                <div className="overview">
                                    <h4>
                                        [2022년 출제기준] 웹디자인기능사
                                        실기시험 완벽 가이드
                                    </h4>
                                    <div className="class-info">
                                        사과코딩 ·80강 ·16시간 30분
                                    </div>
                                    <div className="class-price">
                                        <span className="sale">30%</span>
                                        <span className="price-prev">
                                            132,000원
                                        </span>
                                        <span className="price-current">
                                            92,400원
                                        </span>
                                    </div>
                                    <div className="class-review">
                                        <span className="stars">
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-half"></i>
                                        </span>
                                        <span className="rating">4.9</span>
                                        <span className="trainee">
                                            1,234명 수강
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="focus-class-item">
                            <div className="thum">
                                <img src="/images/basic-class-main-cover-03.png" />
                                <em className="like active"></em>
                                <span className="badge discount">30% 할인</span>
                            </div>
                            <div className="desc">
                                <div className="overview">
                                    <h4>
                                        [2022년 출제기준] 웹디자인기능사
                                        실기시험 완벽 가이드
                                    </h4>
                                    <div className="class-info">
                                        사과코딩 ·80강 ·16시간 30분
                                    </div>
                                    <div className="class-price">
                                        <span className="sale">30%</span>
                                        <span className="price-prev">
                                            132,000원
                                        </span>
                                        <span className="price-current">
                                            92,400원
                                        </span>
                                    </div>
                                    <div className="class-review">
                                        <span className="stars">
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-half"></i>
                                        </span>
                                        <span className="rating">4.9</span>
                                        <span className="trainee">
                                            1,234명 수강
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="focus-class-item">
                            <div className="thum">
                                <img src="/images/basic-class-main-cover-07.png" />
                                <em className="like active"></em>
                                <span className="badge discount">30% 할인</span>
                            </div>
                            <div className="desc">
                                <div className="overview">
                                    <h4>
                                        [2022년 출제기준] 웹디자인기능사
                                        실기시험 완벽 가이드
                                    </h4>
                                    <div className="class-info">
                                        사과코딩 ·80강 ·16시간 30분
                                    </div>
                                    <div className="class-price">
                                        <span className="sale">30%</span>
                                        <span className="price-prev">
                                            132,000원
                                        </span>
                                        <span className="price-current">
                                            92,400원
                                        </span>
                                    </div>
                                    <div className="class-review">
                                        <span className="stars">
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-half"></i>
                                        </span>
                                        <span className="rating">4.9</span>
                                        <span className="trainee">
                                            1,234명 수강
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="focus-class-item">
                            <div className="thum">
                                <img src="/images/best-class-main-cover-06.png" />
                                <em className="like active"></em>
                                <span className="badge discount">30% 할인</span>
                            </div>
                            <div className="desc">
                                <div className="overview">
                                    <h4>
                                        [2022년 출제기준] 웹디자인기능사
                                        실기시험 완벽 가이드
                                    </h4>
                                    <div className="class-info">
                                        사과코딩 ·80강 ·16시간 30분
                                    </div>
                                    <div className="class-price">
                                        <span className="sale">30%</span>
                                        <span className="price-prev">
                                            132,000원
                                        </span>
                                        <span className="price-current">
                                            92,400원
                                        </span>
                                    </div>
                                    <div className="class-review">
                                        <span className="stars">
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-half"></i>
                                        </span>
                                        <span className="rating">4.9</span>
                                        <span className="trainee">
                                            1,234명 수강
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="focus-class-item">
                            <div className="thum">
                                <img src="/images/basic-class-main-cover-08.png" />
                                <em className="like active"></em>
                                <span className="badge discount">30% 할인</span>
                            </div>
                            <div className="desc">
                                <div className="overview">
                                    <h4>
                                        [2022년 출제기준] 웹디자인기능사
                                        실기시험 완벽 가이드
                                    </h4>
                                    <div className="class-info">
                                        사과코딩 ·80강 ·16시간 30분
                                    </div>
                                    <div className="class-price">
                                        <span className="sale">30%</span>
                                        <span className="price-prev">
                                            132,000원
                                        </span>
                                        <span className="price-current">
                                            92,400원
                                        </span>
                                    </div>
                                    <div className="class-review">
                                        <span className="stars">
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-half"></i>
                                        </span>
                                        <span className="rating">4.9</span>
                                        <span className="trainee">
                                            1,234명 수강
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="focus-class-item">
                            <div className="thum">
                                <img src="/images/beyond-class-main-cover-01.png" />
                                <em className="like active"></em>
                                <span className="badge discount">30% 할인</span>
                            </div>
                            <div className="desc">
                                <div className="overview">
                                    <h4>
                                        [2022년 출제기준] 웹디자인기능사
                                        실기시험 완벽 가이드
                                    </h4>
                                    <div className="class-info">
                                        사과코딩 ·80강 ·16시간 30분
                                    </div>
                                    <div className="class-price">
                                        <span className="sale">30%</span>
                                        <span className="price-prev">
                                            132,000원
                                        </span>
                                        <span className="price-current">
                                            92,400원
                                        </span>
                                    </div>
                                    <div className="class-review">
                                        <span className="stars">
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-half"></i>
                                        </span>
                                        <span className="rating">4.9</span>
                                        <span className="trainee">
                                            1,234명 수강
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="focus-class-item">
                            <div className="thum">
                                <img src="/images/beyond-class-main-cover-04.png" />
                                <em className="like active"></em>
                                <span className="badge discount">30% 할인</span>
                            </div>
                            <div className="desc">
                                <div className="overview">
                                    <h4>
                                        [2022년 출제기준] 웹디자인기능사
                                        실기시험 완벽 가이드
                                    </h4>
                                    <div className="class-info">
                                        사과코딩 ·80강 ·16시간 30분
                                    </div>
                                    <div className="class-price">
                                        <span className="sale">30%</span>
                                        <span className="price-prev">
                                            132,000원
                                        </span>
                                        <span className="price-current">
                                            92,400원
                                        </span>
                                    </div>
                                    <div className="class-review">
                                        <span className="stars">
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-half"></i>
                                        </span>
                                        <span className="rating">4.9</span>
                                        <span className="trainee">
                                            1,234명 수강
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
                <div className="focus-class-content">
                    <div className="front-header">
                        <h2>기초부터 응용까지 한번에 OK</h2>
                        <a href="#" className="btn-view-items">
                            전체 클래스 보기
                        </a>
                    </div>
                    <Slider {...settings} className="focus-class-items">
                        <div className="focus-class-item">
                            <div className="thum">
                                <img src="/images/basic-class-main-cover-01.png" />
                                <em className="like active"></em>
                                <span className="badge discount">30% 할인</span>
                            </div>
                            <div className="desc">
                                <div className="overview">
                                    <h4>
                                        [2022년 출제기준] 웹디자인기능사
                                        실기시험 완벽 가이드
                                    </h4>
                                    <div className="class-info">
                                        사과코딩 ·80강 ·16시간 30분
                                    </div>
                                    <div className="class-price">
                                        <span className="sale">30%</span>
                                        <span className="price-prev">
                                            132,000원
                                        </span>
                                        <span className="price-current">
                                            92,400원
                                        </span>
                                    </div>
                                    <div className="class-review">
                                        <span className="stars">
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-half"></i>
                                        </span>
                                        <span className="rating">4.9</span>
                                        <span className="trainee">
                                            1,234명 수강
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="focus-class-item">
                            <div className="thum">
                                <img src="/images/basic-class-main-cover-02.png" />
                                <em className="like active"></em>
                                <span className="badge discount">30% 할인</span>
                            </div>
                            <div className="desc">
                                <div className="overview">
                                    <h4>
                                        [2022년 출제기준] 웹디자인기능사
                                        실기시험 완벽 가이드
                                    </h4>
                                    <div className="class-info">
                                        사과코딩 ·80강 ·16시간 30분
                                    </div>
                                    <div className="class-price">
                                        <span className="sale">30%</span>
                                        <span className="price-prev">
                                            132,000원
                                        </span>
                                        <span className="price-current">
                                            92,400원
                                        </span>
                                    </div>
                                    <div className="class-review">
                                        <span className="stars">
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-half"></i>
                                        </span>
                                        <span className="rating">4.9</span>
                                        <span className="trainee">
                                            1,234명 수강
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="focus-class-item">
                            <div className="thum">
                                <img src="/images/beyond-class-main-cover-01.png" />
                                <em className="like active"></em>
                                <span className="badge discount">30% 할인</span>
                            </div>
                            <div className="desc">
                                <div className="overview">
                                    <h4>
                                        [2022년 출제기준] 웹디자인기능사
                                        실기시험 완벽 가이드
                                    </h4>
                                    <div className="class-info">
                                        사과코딩 ·80강 ·16시간 30분
                                    </div>
                                    <div className="class-price">
                                        <span className="sale">30%</span>
                                        <span className="price-prev">
                                            132,000원
                                        </span>
                                        <span className="price-current">
                                            92,400원
                                        </span>
                                    </div>
                                    <div className="class-review">
                                        <span className="stars">
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-half"></i>
                                        </span>
                                        <span className="rating">4.9</span>
                                        <span className="trainee">
                                            1,234명 수강
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="focus-class-item">
                            <div className="thum">
                                <img src="/images/basic-class-main-cover-03.png" />
                                <em className="like active"></em>
                                <span className="badge discount">30% 할인</span>
                            </div>
                            <div className="desc">
                                <div className="overview">
                                    <h4>
                                        [2022년 출제기준] 웹디자인기능사
                                        실기시험 완벽 가이드
                                    </h4>
                                    <div className="class-info">
                                        사과코딩 ·80강 ·16시간 30분
                                    </div>
                                    <div className="class-price">
                                        <span className="sale">30%</span>
                                        <span className="price-prev">
                                            132,000원
                                        </span>
                                        <span className="price-current">
                                            92,400원
                                        </span>
                                    </div>
                                    <div className="class-review">
                                        <span className="stars">
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-half"></i>
                                        </span>
                                        <span className="rating">4.9</span>
                                        <span className="trainee">
                                            1,234명 수강
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="focus-class-item">
                            <div className="thum">
                                <img src="/images/basic-class-main-cover-04.png" />
                                <em className="like active"></em>
                                <span className="badge discount">30% 할인</span>
                            </div>
                            <div className="desc">
                                <div className="overview">
                                    <h4>
                                        [2022년 출제기준] 웹디자인기능사
                                        실기시험 완벽 가이드
                                    </h4>
                                    <div className="class-info">
                                        사과코딩 ·80강 ·16시간 30분
                                    </div>
                                    <div className="class-price">
                                        <span className="sale">30%</span>
                                        <span className="price-prev">
                                            132,000원
                                        </span>
                                        <span className="price-current">
                                            92,400원
                                        </span>
                                    </div>
                                    <div className="class-review">
                                        <span className="stars">
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-half"></i>
                                        </span>
                                        <span className="rating">4.9</span>
                                        <span className="trainee">
                                            1,234명 수강
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="focus-class-item">
                            <div className="thum">
                                <img src="/images/beyond-class-main-cover-01.png" />
                                <em className="like active"></em>
                                <span className="badge discount">30% 할인</span>
                            </div>
                            <div className="desc">
                                <div className="overview">
                                    <h4>
                                        [2022년 출제기준] 웹디자인기능사
                                        실기시험 완벽 가이드
                                    </h4>
                                    <div className="class-info">
                                        사과코딩 ·80강 ·16시간 30분
                                    </div>
                                    <div className="class-price">
                                        <span className="sale">30%</span>
                                        <span className="price-prev">
                                            132,000원
                                        </span>
                                        <span className="price-current">
                                            92,400원
                                        </span>
                                    </div>
                                    <div className="class-review">
                                        <span className="stars">
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-half"></i>
                                        </span>
                                        <span className="rating">4.9</span>
                                        <span className="trainee">
                                            1,234명 수강
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="focus-class-item">
                            <div className="thum">
                                <img src="/images/beyond-class-main-cover-01.png" />
                                <em className="like active"></em>
                                <span className="badge discount">30% 할인</span>
                            </div>
                            <div className="desc">
                                <div className="overview">
                                    <h4>
                                        [2022년 출제기준] 웹디자인기능사
                                        실기시험 완벽 가이드
                                    </h4>
                                    <div className="class-info">
                                        사과코딩 ·80강 ·16시간 30분
                                    </div>
                                    <div className="class-price">
                                        <span className="sale">30%</span>
                                        <span className="price-prev">
                                            132,000원
                                        </span>
                                        <span className="price-current">
                                            92,400원
                                        </span>
                                    </div>
                                    <div className="class-review">
                                        <span className="stars">
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-half"></i>
                                        </span>
                                        <span className="rating">4.9</span>
                                        <span className="trainee">
                                            1,234명 수강
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="focus-class-item">
                            <div className="thum">
                                <img src="/images/beyond-class-main-cover-03.png" />
                                <em className="like active"></em>
                                <span className="badge discount">30% 할인</span>
                            </div>
                            <div className="desc">
                                <div className="overview">
                                    <h4>
                                        [2022년 출제기준] 웹디자인기능사
                                        실기시험 완벽 가이드
                                    </h4>
                                    <div className="class-info">
                                        사과코딩 ·80강 ·16시간 30분
                                    </div>
                                    <div className="class-price">
                                        <span className="sale">30%</span>
                                        <span className="price-prev">
                                            132,000원
                                        </span>
                                        <span className="price-current">
                                            92,400원
                                        </span>
                                    </div>
                                    <div className="class-review">
                                        <span className="stars">
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-half"></i>
                                        </span>
                                        <span className="rating">4.9</span>
                                        <span className="trainee">
                                            1,234명 수강
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default FocusClass;
