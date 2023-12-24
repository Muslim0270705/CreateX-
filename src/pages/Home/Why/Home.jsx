import React from 'react';
import img from "../../../assets/blog2.png";


const Home = () => {
    return (
        <section className="enjoy">
            <div className="container">
                <div className="enjoy__row">
                    <div className="enjoy__left">
                        <p className="enjoy__left-video">
                            <svg width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle opacity="0.12" cx="42" cy="42" r="42" fill="#FF3F3A"/>
                                <circle cx="42" cy="42" r="26" fill="#FF3F3A"/>
                                <path d="M48.5 41.134C49.1667 41.5189 49.1667 42.4811 48.5 42.866L39.5 48.0622C38.8333 48.4471 38 47.966 38 47.1962L38 36.8038C38 36.034 38.8333 35.5529 39.5 35.9378L48.5 41.134Z" fill="white"/>
                            </svg>
                            Play showreel
                        </p>
                        <h2 className="enjoy__left-title">
                            Enjoy studying <br/>
                            with Createx <br/> Online Courses
                        </h2>
                        <div className="enjoy__left-btns">
                            <button className="btn">
                                About us
                            </button>
                            <button className="btn">
                                Explore courses
                            </button>
                        </div>
                    </div>
                    <div className="enjoy__right">
                        <img src={img} alt=""/>
                    </div>
                </div>
            </div>
            <div className="enjoy__bottom">
                <p className="enjoy__bottom-card">
                   <span>
                       1200
                   </span>
                    Students graduated
                </p>
                <p className="enjoy__bottom-card">
                   <span>
                      84
                   </span>
                    Completed courses
                </p>
                <p className="enjoy__bottom-card">
                   <span>
                      16
                   </span>
                    Qualified tutors
                </p>
                <p className="enjoy__bottom-card">
                   <span>
                       5
                   </span>
                    Years of experience
                </p>
            </div>
        </section>
    );
};

export default Home;