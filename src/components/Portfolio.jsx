import React, { Fragment } from "react";
import { Reveal, Tween } from "react-gsap";
import { AiOutlineLink } from "react-icons/ai";
import "../css/Portfolio.css";

function Portfolio() {
  const FadeinRight = ({ children }) => (
    <Tween
      from={{ opacity: 0, transform: "translate3d(-20vw, 0 , 0)" }}
      duration={1}
    >
      {children}
    </Tween>
  );
  return (
    <Fragment>
      <div id="portfolio" className="portfolio">
        <Reveal>
          <FadeinRight>
            <div className="portfolio-page">
              <h5>PortFolio Section</h5>
            </div>
            <div className="row">
              <div className="portfolio-section">
                <div className="portfolio-image">
                  <img src="/static/images/logo.png" alt="" />
                </div>
                <div className="portfolio-details">
                  <div className="portfolio-cont">
                    <h5>Music Application</h5>
                    <h6>Tools Used</h6>
                    <p>Django, JavaScript(React), HTML, CSS, MDBootstrap</p>
                    <div className="button">
                      <AiOutlineLink
                        style={{ textAlign: "center", marginLeft: 5 }}
                      />
                      <a href="http://www.legacymusic.site">Check it out</a>
                    </div>
                  </div>
                  <div className="port-ori-image">
                    <img src="/static/images/music.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="portfolio-section">
                <div className="portfolio-image">
                  <img src="/static/images/logo.png" alt="" />
                </div>
                <div className="portfolio-details">
                  <div className="portfolio-cont">
                    <h5>Social Media Application</h5>
                    <h6>Tools Used</h6>
                    <p>Django, JavaScript(JQuery), HTML, CSS</p>
                    <div className="button">
                      <AiOutlineLink
                        style={{ textAlign: "center", marginLeft: 5 }}
                      />
                      <a href="http://mysocialapp.pythonanywhere.com">
                        Check it out
                      </a>
                    </div>
                  </div>
                  <div className="port-ori-image">
                    <img src="/static/images/media2.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="portfolio-section">
                <div className="portfolio-image">
                  <img src="/static/images/logo.png" alt="" />
                </div>
                <div className="portfolio-details">
                  <div className="portfolio-cont">
                    <h5>Loan Calculator Application</h5>
                    <h6>Tools Used</h6>
                    <p>JavaScript(React), HTML, CSS, MDBootstrap</p>
                    <div className="button">
                      <AiOutlineLink
                        style={{ textAlign: "center", marginLeft: 5 }}
                      />
                      <a href="https://calculator-loan.netlify.app/">
                        Check it out
                      </a>
                    </div>
                  </div>
                  <div className="port-ori-image">
                    <img src="/static/images/loan.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="portfolio-section">
                <div className="portfolio-image">
                  <img src="/static/images/logo.png" alt="" />
                </div>
                <div className="portfolio-details">
                  <div className="portfolio-cont">
                    <h5>Sport Application</h5>
                    <h6>Tools Used</h6>
                    <p>JavaScript(React), HTML, CSS, MDBootstrap</p>
                    <div className="button">
                      <AiOutlineLink
                        style={{ textAlign: "center", marginLeft: 5 }}
                      />
                      <a href="https://sporty.netlify.app">Check it out</a>
                    </div>
                  </div>
                  <div className="port-ori-image">
                    <img src="/static/images/sports.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="portfolio-section">
                <div className="portfolio-image">
                  <img src="/static/images/logo.png" alt="" />
                </div>
                <div className="portfolio-details">
                  <div className="portfolio-cont">
                    <h5>School Management Application</h5>
                    <h6>Tools Used</h6>
                    <p>Django, JavaScript(React), HTML, CSS, MDBootstrap</p>
                    <div className="button">
                      <AiOutlineLink
                        style={{ textAlign: "center", marginLeft: 5 }}
                      />
                      <a href="http://tlinker.pythonanywhere.com">
                        Check it out
                      </a>
                    </div>
                  </div>
                  <div className="port-ori-image">
                    <img src="/static/images/school.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="portfolio-section">
                <div className="portfolio-image">
                  <img src="/static/images/logo.png" alt="" />
                </div>
                <div className="portfolio-details">
                  <div className="portfolio-cont">
                    <h5>E-commerce Full Features Application</h5>
                    <h6>Tools Used</h6>
                    <p>JavaScript(React), HTML, CSS, MDBootstrap</p>
                    <div className="button">
                      <AiOutlineLink
                        style={{ textAlign: "center", marginLeft: 5 }}
                      />
                      <a href="http://taadesina.pythonanywhere.com">
                        Check it out
                      </a>
                    </div>
                  </div>
                  <div className="port-ori-image">
                    <img src="/static/images/loan.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="portfolio-section">
                <div className="portfolio-image">
                  <img src="/static/images/logo.png" alt="" />
                </div>
                <div className="portfolio-details">
                  <div className="portfolio-cont">
                    <h5>Node Blog Authentication Application</h5>
                    <h6>Tools Used</h6>
                    <p>
                      Node js, Express js, JavaScript(React), HTML, CSS, Ant
                      Design
                    </p>
                    <div className="button">
                      <AiOutlineLink
                        style={{ textAlign: "center", marginLeft: 5 }}
                      />
                      <a href="https://nodefirstblog.herokuapp.com/">
                        Check it out
                      </a>
                    </div>
                  </div>
                  <div className="port-ori-image">
                    <img src="/static/images/nodeapp.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </FadeinRight>
        </Reveal>
      </div>
    </Fragment>
  );
}

export default Portfolio;
