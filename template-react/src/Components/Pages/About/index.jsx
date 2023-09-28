import React from "react";
import "./style.css";
import img_one from "../../../assets/images/about-01.jpg";
import img_two from "../../../assets/images/about-02.jpg";
import img_three from "../../../assets/images/about-03.jpg";
import img_four from "../../../assets/images/about-04.jpg";
import fb from "../../../assets/images/free-icon-facebook-4628653.png";
import twit from "../../../assets/images/free-icon-twitter-2335417.png";
import insta from "../../../assets/images/free-icon-instagram-logo-4406253.png";
import youtube from "../../../assets/images/free-icon-video-7209684.png";
import pepper from "../../../assets/images/icons8-pepper-68.png";
import leaf from "../../../assets/images/icons8-leaf-68.png";
import cocktail from "../../../assets/images/icons8-cocktail-68.png";
import img from "../../../assets/images/about-06.jpg";

export const About = ()=>{
    return <>
    <section>
        <div className="center">
                <span className="about">About Simple House</span>
                <p className="paragraph">
                    This is about page of simple house template. You can modify and use this <br/>
                    HTML template for your website. Total 3 HTML pages included in this template. <br/>
                    Header image has a parallax effect.
                </p>
        </div>
        <div className="box">
            <img src={img_one} alt="" />
            <div className="description">
                <h2 className="name">Jennifer Soft</h2>
                <p className="specialist">Founder and CEO</p>
                <p className="biography">
                    Vivamus cursus leo nec sem feugiat <br/>
                    sagittis. Duis ut feugiat odio, sit amet <br/>
                    accumsan odio.
                </p>
                <div className="img_box">
                    <img src={fb} alt="" />
                    <img src={twit} alt="" />
                    <img src={insta} alt="" />
                </div>
            </div>
            <img src={img_two} alt="" />
            <div className="description">
                <h2 className="name">Daisy Walker</h2>
                <p className="specialist">Executive Chef</p>
                <p className="biography">
                    Praesent non vulputate elit. Orci varius <br/>
                    natoque et magnis dis parturient, <br/>
                    nascetur ridiculus mus.
                </p>
                <div className="img_box">
                    <img src={fb} alt="" />
                    <img src={twit} alt="" />
                </div>
            </div>
        </div>
        <div className="box">
            <img src={img_three} alt="" />
            <div className="description">
                <h2 className="name">Florence Nelson</h2>
                <p className="specialist">Kitchen Manager</p>
                <p className="biography">
                    Vivamus cursus leo nec sem feugiat <br/>
                    sagittis. Duis ut feugiat odio, sit amet <br/>
                    accumsan odio.
                </p>
                <div className="img_box">
                    <img src={fb} alt="" />
                    <img src={insta} alt="" />
                </div>
            </div>
            <img src={img_four} alt="" />
            <div className="description">
                <h2 className="name">Valentina Martin</h2>
                <p className="specialist">Culinary Director</p>
                <p className="biography">
                    Praesent non vulputate elit. Orci varius <br/>
                    natoque penatibus et magnis montes, <br/>
                    nascetur ridiculus mus.
                </p>
                <div className="img_box">
                    <img src={fb} alt="" />
                    <img src={twit} alt="" />
                    <img src={insta} alt="" />
                    <img src={youtube} alt="" />
                </div>
            </div>
        </div>
            <div className="back_img"></div>
        <div className="box">
            <div className="block_box">
                <img src={pepper} alt="Pepper" />
                <p>
                    Donec sed orci fermentum, convallis <br/>
                    lacus id, tempus elit. Sed eu neque <br/>
                    accumsan, porttitor arcu a, interdum <br/>
                    est. Donec in risus eu ante.
                </p>
                <button className="btn_one">Read More</button>
            </div>
            <div className="block_box">
                <img src={leaf} alt="Leaf" />
                <p>
                    Maecenas pretium rutrum molestie. <br/>
                    Duis dignissim egestas turpis sit. Nam <br/>
                    sed suscipit odio. Morbi in dolor finibus, <br/>
                    consequat nisl eget.
                </p>
                <button className="btn_two">Read More</button>
            </div>
            <div className="block_box">
                <img src={cocktail} alt="Cocktail" />
                <p>
                    Morbi in dolor finibus, consequat nisl <br/>
                    eget, pretium nunc. Maecenas pretium <br/>
                    rutrum molestie. Duis dignissim egestas <br/>
                    turpis sit.
                </p>
                <button className="btn_three">Read More</button>
            </div>
        </div>
        <div className="box">
            <img src={img} alt="" />
            <div className="end">
                <h2>History of our restaurant</h2>
                <p>
                    Sed ligula risus, interdum aliquet imperdiet sit amet, auctor <br/>
                    sit amet justo. Maecenas posuere lorem id augue interdum <br/>
                    vehicula. Praesent sed leo eget libero ultricies congue.
                </p>
                <br/>
                <p>
                    Redistributing this template as a downloadable ZIP file on <br/>
                    any template collection site is strictly prohibited. You will <br/>
                    need to contact TemplateMo for additional permissions <br/>
                    about our templates. Thank you.
                </p>
            </div>
        </div>
    </section>
    </>
}