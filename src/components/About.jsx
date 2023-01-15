import React, { Fragment, useEffect } from "react";
import { Tween, Timeline } from "react-gsap";
import { FaFileDownload } from "react-icons/fa";
import "../css/About.css";

function About() {
  useEffect(() => {
    const navbar = document.querySelector("nav");
    window.onscroll = () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        navbar.classList.add("fixed");
      } else {
        navbar.classList.remove("fixed");
      }
    };
    return () => {};
  }, []);

  return (
    <Fragment>
      <div id="about" className="about-page">
        <div className="imgContent">
          <img src="./static/images/My_image.jpg" alt="" />
        </div>
        <div className="textContent">
          <Tween to={{ translateX: "0" }} ease="power.out(1.2)">
            <div className="text-header">
              <h5>Taofeek Adesina Adebayo</h5>
            </div>
          </Tween>
          <Timeline
            target={
              <div className="text">
                Overall 3+ years of QA experience in Automation testing of Web, 
                Mobile applications with specialization in Software Quality Assurance Testing, 
                Software development, Software Test Automation Engineer and proficient 
                in testing on API, Web based and Mobile Applications Extended expertise in
                 QA and Automated Software Testing using Selenium, Cypress, WebdriverIo, 
                 Playwright. Good programming knowledge of JavaScript, Typescript, NodeJS, 
                 Reactjs, PostgreSQL. A versatile Engineer in Both Software Development 
                 and Software Development in Test.
              </div>
            }
          >
            <Tween
              to={{ opacity: 1, translateY: "0" }}
              ease="back.out(1.6)"
              duration={1}
              delay={2}
              stagger={1.35}
            />
          </Timeline>
          <div className="biography">
            <Tween to={{ translateX: "0" }} delay={2.5}>
              <h5>Biography</h5>
            </Tween>
            <Tween to={{ translateY: "0" }} delay={4}>
              <p>
                I am currently working as a Software Test Automation Engineer in one of the
                leading companies in Eastern Europe (EPAM SYSTEM). I develop test automation
                frameworks, create test plan and design test cases according to requirements. 
                I have experience in Software Development using Reactjs, Nodejs, Typescript to 
                build applications from scratch, I can work with backend development and frontend 
                development. I am conversant with tools and technologies such as: Javascript, Typescript,
                NodeJS, ReactJS, WebdriverIO, Cypress, Mocha, Chai, API Test, UI Test, CI/CD process.
                I enjoy learning and watching soccer when not busy with work activities.
              </p>
            </Tween>
            <Tween
              to={{ opacity: 1 }}
              ease="back.out(1.2)"
              stagger={0.5}
              delay={5.5}
            >
              <div className="cv-button">
                <a href="./static/CV - Taofeek Adesina.pdf" download="resume">
                  <span>
                    <FaFileDownload />
                  </span>
                  Download Resume
                </a>
              </div>
            </Tween>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default About;
