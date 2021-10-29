import React, { Fragment } from "react";
import "../css/Contact.css";
import { Tween, Reveal } from "react-gsap";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { FaAddressCard } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiFillGithub, AiFillPhone } from "react-icons/ai";

function Contact() {
  const FadeInRight = ({ children }) => (
    <Tween from={{ opacity: 0, transform: "translateX(-30%)" }}>
      {children}
    </Tween>
  );
  const FadeInLeft = ({ children }) => (
    <Tween from={{ opacity: 0, transform: "translateX(30%)" }} delay={1}>
      {children}
    </Tween>
  );

  const FadeInUp = ({ children }) => (
    <Tween from={{ opacity: 0, transform: "translateY(30%)" }} delay={1}>
      {children}
    </Tween>
  );
  return (
    <Fragment>
      <Reveal>
        <div className="contact-page">
          <FadeInRight>
            <div className="contact-details">
              <h5>Do you need my service ?</h5>
            </div>
          </FadeInRight>
          <div className="contact-desc">
            <FadeInUp>
              <div className="contact-image">
                <img src="./static/images/logo2.JPG" alt="" />
              </div>
              <div className="contact-line">
                <div className="line" />
              </div>
            </FadeInUp>
            <FadeInLeft>
              <div className="contact-text">
                <p>I am available for full-time job opportunities.</p>

                <div className="contact-email">
                  <div className="contact-share">
                    <span>
                      <FaAddressCard />
                    </span>
                    <h4>Sauletekio al.25, Vilnius, 10225</h4>
                  </div>
                  <div className="contact-share">
                    <span>
                      <MdEmail />
                    </span>
                    <h4>Taofeekdboy@yahoo.com</h4>
                  </div>
                  <div className="contact-share">
                    <span>
                      <AiFillPhone />
                    </span>
                    <h4>+37062659246</h4>
                  </div>
                </div>
                <div className="contact-social-links">
                  <div className="contact-links">
                    <div className="overlay fb"></div>
                    <a href="https://www.facebook.com/taofeekdboy">
                      <FiFacebook />
                    </a>
                  </div>
                  <div className="contact-links">
                    <div className="overlay tw"></div>
                    <a href="https://www.twitter.com">
                      <FiTwitter style={{ textAlign: "center" }} />
                    </a>
                  </div>
                  <div className="contact-links">
                    <div className="overlay in"></div>
                    <a href="https://www.instagram.com/taosandplus">
                      <FiInstagram />
                    </a>
                  </div>
                  <div className="contact-links">
                    <div className="overlay gt"></div>
                    <a href="https://www.github.com/taosand1991">
                      <AiFillGithub style={{ cursor: "pointer" }} />
                    </a>
                  </div>
                </div>
              </div>
            </FadeInLeft>
          </div>
        </div>
      </Reveal>
    </Fragment>
  );
}

export default Contact;
