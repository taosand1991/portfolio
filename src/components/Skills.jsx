import React, { Fragment } from "react";
import { Tween, Reveal } from "react-gsap";
import { SiGraphcool, SiWebpack } from "react-icons/si";
import { MdDeveloperMode } from "react-icons/md";
import "../css/Skills.css";

function Skills() {
  const FadeinLeft = ({ children }) => (
    <Tween
      from={{ opacity: 0, transform: "translate3d(-20vw, 0, 0)" }}
      ease="back.out(1.4)"
    >
      {children}
    </Tween>
  );
  return (
    <Fragment>
      <div id="skills" className="skills-section">
        <Reveal>
          <FadeinLeft>
            <div className="skill-header">
              <h3>Skills</h3>
            </div>
            <div className="skills-detail">
              <div className="skills-content web-development">
                <div className="skills-icon">
                  <span>
                    <SiWebpack />
                  </span>
                </div>
                <div className="Skills-text">
                  <h4>Web Development</h4>
                  <p>
                    Creating web applications and scaleable websites with
                    different tools. Building secured websites has been a
                    priority
                  </p>
                </div>
                <div className="skills-tools">
                  <h5>Tools</h5>
                  <div className="skills-classification">
                    <div className="front-end">
                      <h4>Front End</h4>
                      <p>
                        Vue.js, React.js, React-Native, HTML5, CSS, JavaScript
                      </p>
                    </div>
                    <div className="back-end">
                      <h4>Back End</h4>
                      <p>Python, JavaScript, Golang, Java, Express, Node.js</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="skills-content mobile-development">
                <div className="skills-icon">
                  <span>
                    <MdDeveloperMode />
                  </span>
                </div>
                <div className="Skills-text">
                  <h4>Mobile Development</h4>
                  <p>
                    Building fast and responsive mobile applications has always
                    been easy with legacy graphics
                  </p>
                </div>
                <div className="skills-tools">
                  <h5>Tools</h5>
                  <p>React-Native, Javascript, Node Js</p>
                </div>
              </div>
              <div className="skills-content graphics-design">
                <div className="skills-icon">
                  <span>
                    <SiGraphcool />
                  </span>
                </div>
                <div className="Skills-text">
                  <h4>Graphics Design</h4>
                  <p>
                    Visualizing and mapping out creative designs and artworks
                    with sophisticated tools.
                  </p>
                </div>
                <div className="skills-tools">
                  <h5>Tools</h5>
                  <p>
                    Adobe Photoshop, Adobe illustrator, After Effects, Premier
                    Pro, Lunacy, CorelDraw, Adobe XD
                  </p>
                </div>
              </div>
            </div>
            <div className="skills__data_lang">
              <div className="skills__lang_frontend">
                <h4>Back End Basics</h4>
                <div className="skills__items">
                  <h4>Python</h4>
                  <div className="skills__line ">
                    <div className="skills__data python"></div>
                  </div>
                </div>
                <div className="skills__items ">
                  <h4>JavaScript</h4>
                  <div className="skills__line">
                    <div className="skills__data javaScript"></div>
                  </div>
                </div>
                <div className="skills__items ">
                  <h4>Java</h4>
                  <div className="skills__line java">
                    <div className="skills__data java"></div>
                  </div>
                </div>
                <div className="skills__items">
                  <h4>Golang</h4>
                  <div className="skills__line">
                    <div className="skills__data golang"></div>
                  </div>
                </div>
              </div>
              <div className="skills__lang_backend">
                <h4>Front End Basics</h4>
                <div className="skills__items">
                  <h4>React</h4>
                  <div className="skills__line ">
                    <div className="skills__data react"></div>
                  </div>
                </div>
                <div className="skills__items">
                  <h4>Vue</h4>
                  <div className="skills__line ">
                    <div className="skills__data vue"></div>
                  </div>
                </div>
                <div className="skills__items">
                  <h4>React-Native</h4>
                  <div className="skills__line ">
                    <div className="skills__data react-native"></div>
                  </div>
                </div>
                <div className="skills__items">
                  <h4>CSS</h4>
                  <div className="skills__line ">
                    <div className="skills__data css"></div>
                  </div>
                </div>
              </div>
            </div>
          </FadeinLeft>
        </Reveal>
      </div>
    </Fragment>
  );
}

export default Skills;
