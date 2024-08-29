import React from "react";
import "../../scss/main/CategortShortCut.scss";

const CategortShortCut = () => {
    return (
        <section className="category-shortcut">
            <div className="category-shortcut-inner">
                <div className="category-shortcut-items">
                    <a href="#" className="category-shortcut-item">
                        <em>
                            <i class="bi bi-calendar-event"></i>
                        </em>
                        <span>진행중인 이벤트</span>
                    </a>
                    <a href="#" className="category-shortcut-item">
                        <em>
                            <i class="bi bi-code"></i>
                        </em>
                        <span>개발·프로그래밍</span>
                    </a>
                    <a href="#" className="category-shortcut-item">
                        <em>
                            <i class="bi bi-graph-up-arrow"></i>
                        </em>
                        <span>운동·건강</span>
                    </a>
                    <a href="#" className="category-shortcut-item">
                        <em>
                            <i class="bi bi-spellcheck"></i>
                        </em>
                        <span>학문·외국어</span>
                    </a>
                    <a href="#" className="category-shortcut-item">
                        <em>
                            <i class="bi bi-cup-hot"></i>
                        </em>
                        <span>라이프스타일</span>
                    </a>
                    <a href="#" className="category-shortcut-item">
                        <em>
                            <i class="bi bi-three-dots"></i>
                        </em>
                        <span>더보기</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CategortShortCut;
