import React from 'react';
import img from "../../../assets/illustration.png"
import img1 from "../../../assets/illustration.png"
const Miss = () => {
    return (
        <section className="miss">
            <div className="container">
                <p className="miss__title">Don’t miss anything</p>
                <h2 className="miss__text">Subscribe to the Createx School <br/>announcements</h2>
                <div className="row">
                    <input className="row__input" type="Your working email"/>
                    <button className="row__btn">
                        Subscribe
                    </button>
                </div>
                <div className="miss__img">
                    <img src={img} alt=""/>
                    <img src={img1} alt=""/>
                </div>
            </div>
        </section>
    );
};

export default Miss;