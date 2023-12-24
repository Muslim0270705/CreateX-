import React, {useContext} from 'react';
import img from "../../../assets/cards.png.png"
import {Context, CustomContext} from "../../../utils/Context";
const Online = () => {
    const {list} = useContext(CustomContext)
    console.log(list)
    return (
        <section className="online">
            <div className="container">
                <p className="online__text">Enjoy your studying!</p>
                <h2 className="online__title">Our online courses</h2>
                <div className="online__row">
                    <div className="online__tabs">
                        <div className="online__tab active">
                            All
                            <sup>
                                12
                            </sup>
                        </div><
                        div className="online__tab">
                        Marketing
                            <sup>
                                12
                            </sup>
                        </div>
                       <input className="online__tabs-input" type="login"  value="Search course..."/>
                    </div>
                    <div className="online__cards">
                        {
                            list.map(item => (
                                <div className="online__card">
                                    <img src={item.img} alt=""/>
                                    <div className={"online__card-info"}>
                                        <button className="online__card-btn">{item.category}</button>
                                        <h1 className="online__card-title"> {item.title}
                                        </h1>
                                        <div className="online__card-bay">
                                            <p className={"online__card-price"}>
                                                $ {item.price}
                                            </p>
                                            <p className={"online__card-span"}>
                                                {item.sm}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Online;