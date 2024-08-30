import React from "react";
import Header from "../component/main/Header";
import FrontSlider from "../component/main/FrontSlider";
import CategortShortCut from "../component/main/CategortShortCut";
import FocusClass from "../component/main/FocusClass";

const Main = () => {
    return (
        <div container front>
            <Header />
            <FrontSlider />
            <CategortShortCut />
            <FocusClass />
            <section className="best-class">
                <div className="best-class-inner"></div>
            </section>
            <section className="early-bird">
                <div className="early-bird-inner"></div>
            </section>
            <section className="blog">
                <div className="blog-inner"></div>
            </section>
            <section className="slogan">
                <div className="slogan-inner"></div>
            </section>
            <section className="tip-tech">
                <div className="tip-tech-inner"></div>
            </section>
            <footer>
                <div className="footer-inner"></div>
            </footer>
        </div>
    );
};

export default Main;
