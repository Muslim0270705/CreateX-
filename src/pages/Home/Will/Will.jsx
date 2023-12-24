import React from 'react';
import logo from "../../../assets/logo.png"
import logo1 from "../../../assets/logo (1).png"
import logo2 from "../../../assets/logo (2).png"
import img from "../../../assets/certificate.png"
const Will = () => {
    return (
        <section className="will">
            <div className="container">
                <div className="will__row">
                    <div className="will__right">
                        <h2 className="will__right-desc">Createx Certificate</h2>
                        <h3 className="will__right-title">Your expertise will <br/>be confirmed</h3>
                        <p className="will__right-text">We are accredited by international professional <br/> organizations and institutes:</p>
                        <div className="will__right-logo">
                            <img src={logo} alt=""/>
                            <img src={logo1} alt=""/>
                            <img src={logo2} alt=""/>
                        </div>
                    </div>
                    <div className="will__img">
                        <img src={img} alt=""/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Will;