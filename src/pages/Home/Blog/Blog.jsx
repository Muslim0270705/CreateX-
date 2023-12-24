import React from 'react';
import img from "../../../assets/blog.png"
import img1 from "../../../assets/image.png"
import img2 from "../../../assets/blog3.png"
const Blog = () => {
    return (
        <section className="blog">
            <div className="container">
                <div className="blog__header">
                <span>
                    <p className="blog__text">Our blog</p>
                    <h2 className="blog__title">Latest posts</h2>
                </span>
                    <button className="blog__btn">
                        Go to blog
                    </button>
                </div>
                <div className="blog__row">
                    <div className="blog__card">
                        <img src={img} alt=""/>
                      <p className="blog__card-text">Marketing September 4, 2020 36 min</p>
                        <h2 className="blog__card-desc">What is traffic arbitrage and does it really <br/> make money?</h2>
                        <p className="blog__card-title">Pharetra, ullamcorper iaculis viverra parturient sed id  <br/>sed. Convallis proin dignissim lacus, purus gravida...</p>
                    </div>
                    <div className="blog__card">
                        <img src={img1} alt=""/>
                        <p className="blog__card-text">Management August 25, 2020 45 min</p>
                        <h2 className="blog__card-desc">What to do and who to talk to if you want to <br/> get feedback on the product</h2>
                        <p className="blog__card-title">Neque a, senectus consectetur odio in aliquet nec eu. <br/> Ultricies ac nibh urna urna sagittis faucibus...</p>
                    </div>
                    <div className="blog__card">
                        <img src={img2} alt=""/>
                        <p className="blog__card-text">Design August 8, 2020</p>
                        <h2 className="blog__card-desc">Should you choose a creative profession if <br/> you are attracted to creativity?</h2>
                        <p className="blog__card-title">Curabitur nisl tincidunt eros venenatis vestibulum ac <br/> placerat. Tortor, viverra sed vulputate ultrices...</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;