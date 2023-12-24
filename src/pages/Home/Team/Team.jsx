import React from 'react';
import img from "../../../assets/team.png";
import img1 from "../../../assets/team-card.png"
import img2 from "../../../assets/tm.png"
import img3 from "../../../assets/tim.png"
const Team = () => {
    return (
        <section className="team">
           <div className="container">
               <p className="team__text">Best tutors are all here</p>
               <h2 className="team__title">Meet our team</h2>
               <div className="team__cards">
                   <div className="team__card">
                       <img className="team__card-img" src={img} alt=""/>
                       <h1 className="team__card-title">Dianne Russell</h1>
                       <p className="team__card-text">Founder and CEO</p>
                   </div>
                   <div className="team__card">
                       <img className="team__card-img" src={img1} alt=""/>
                       <h1 className="team__card-title">Jerome Bell</h1>
                       <p className="team__card-text">Founder and Program Director</p>
                   </div>
                   <div className="team__card">
                       <img className="team__card-img" src={img2} alt=""/>
                       <h1 className="team__card-title">Kristin Watson</h1>
                       <p className="team__card-text"> Marketer, Curator of Marketing Course</p>
                   </div>
                   <div className="team__card">
                       <img className="team__card-img" src={img3} alt=""/>
                       <h1 className="team__card-title">Marvin McKinney</h1>
                       <p className="team__card-text">PM, Curator of Management Course</p>
                   </div>
               </div>
           </div>
        </section>
    );
};

export default Team;