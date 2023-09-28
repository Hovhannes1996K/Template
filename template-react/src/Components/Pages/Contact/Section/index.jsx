import React, { useState } from "react";
import { Show_div } from "../../Show_div";
import "./style.css";
import call_image from "../../../../assets/images/free-icon-call-button-9372895.png";
import sms_image from "../../../../assets/images/free-icon-sms-4186519.png";
import facebook from "../../../../assets/images/free-icon-facebook-4628653.png";
import twitter from "../../../../assets/images/free-icon-twitter-2335417.png";
import instagram from "../../../../assets/images/free-icon-instagram-logo-4406253.png";

export default function Section(){
    return(
        <section>
            <div className="center">
                <span className="contact">Contact Page</span>
                <p className="paragraph">
                    You may use <a href="#">Simple Contact Form</a> to send email to your inbox. You can modify <br/>
                    and use this template for your website. Header image has a parallax effect. <br/>
                    Total 3 HTML pages included in this template.
                </p>
            </div>
            <div className="sec">
                <div className="form">
                    <input type="text" placeholder="Name" /><br/>
                    <input type="email" placeholder="Email" /><br/>
                    <textarea className="area" placeholder="Message" name="" id="" cols="30" rows="10"></textarea><br/>
                    <button>Send</button>
                </div>
                <div className="desc">
                    <span>Our Address</span>
                    <p className="text">
                    180 Orci varius natoque penatibus et <br/>
                    magnis dis parturient montes, nascetur <br/>
                    ridiculus mus 10550
                    </p>
                    <p className="call">
                        <img src={call_image} alt="" />
                        <span>080-090-0110</span>
                    </p>
                    <p className="sms">
                        <img src={sms_image} alt="" />
                        <span>info@company.coc</span>
                    </p>
                    <br/>
                    <div className="image_box">
                        <img src={facebook} alt="" />
                        <img src={twitter} alt="" />
                        <img src={instagram} alt="" />
                    </div>
                </div>
            </div>
            <div className="for_map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97583.89596711991!2d44.4061666855741!3d40.15349240562574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406aa2dab8fc8b5b%3A0x3d1479ae87da526a!2z0JXRgNC10LLQsNC9!5e0!3m2!1sru!2sam!4v1695148500842!5m2!1sru!2sam" className="map"></iframe>
            </div>
            <div className="center">
                <span className="contact">FAQs</span>
                <p className="paragraph">
                    This section comes with Accordion tabs for different questions and answers <br/>
                    about Simple House HTML CSS template. Thank you. #666
                </p>
            </div>
            <Show_div text="1. Fusce eu lorem et dui #09C maximus varius?" description="#666 Duis blandit purus vel nenenatis rutrum. Pellentesque pellentesque tindicunt lorem, ac egestas massa sollicitudin vel. Nam scelerisque vulputate quam mollis pretium. Morbi condimentum volutpat."/>
            <Show_div text="2. Vestibulum #999 ante ipsum primis in faucibus orci?" description="Mauris euismod odio at commodo rhoncus. Maecenas nec interdum purus, sed auctor est. Sed eleifend urna nec diam consectetur, a aliquet turpis facilisis. Integer est sapien, sagittis vel massa vel, interdum euismod erat. Aenean sollicitudin nisi neque, efficitur posuere urna rutrum porta."/>
            <Show_div text="3. Um erat. Lorem ipsum dolor sit amet consectetur?" description="Phasellus dui velit, feugiat sed elit ut, facilisis aliquam metus. Ut id bibendum erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum porttitor imperdiet. Integer facilisis."/>
            <Show_div text="4. Ut ac erat sit amet neque efficitur faucibus et in lectus?" description="Vivamus viverra pretium ultricies. Praesent feugiat, sapien vitae blandit efficitur, sem nulla venenatis nunc, vel maximus ligula sem a sem. Pellentesque ligula ex, facilisis ac libero a, blandit ullamcorper enim."/>
        </section>
    )  
}