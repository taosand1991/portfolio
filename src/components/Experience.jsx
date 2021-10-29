import React, { Fragment } from "react";
import { Reveal, Tween } from "react-gsap";
import "../css/Experience.css";

function Experience() {
  return (
    <Fragment>
      <div id="experience" className="experience">
        <Reveal>
          <Tween from={{ opacity: 1, transform: "translateY(200%)" }}>
            <div className="experience-page">
              <h3>Experience</h3>
            </div>
            <div className="experience__detail">
              <div className="experience__text">
                <h4>Freelance</h4>
                <h5>Web Developer | April 2018 - September 2021</h5>
                <p>
                  Effectively multitasked and worked well with internal and
                  external teams. Remained knowledgeable in new standards,
                  technologies, and trends in website development. Helped to
                  achieve a consistent look and visual theme across the website
                  by promoting uniform fonts, formatting, images, and layout.
                  Remained dedicated to emerging technology and the latest
                  digital marketing concepts. Worked with a proficient
                  understanding of code conversion tools. Provided effective
                  troubleshooting and remediation for web applications.
                </p>
              </div>
              <div className="experience__text">
                <h4>As-Salam Graphical and Computer Services</h4>
                <h5>Graphic Designer | Jan 2017 - Dec 2017</h5>
                <p>
                  As a graphic designer, I communicate to clients about their
                  needs and designs, I plan on it and study the material and
                  induce proper planning of making it a big success, I work with
                  time and I make sure all my projects are completed before the
                  deadline. I review final layouts and entertain complaints and
                  improvements to be done. I work with Illustrator, Photoshop,
                  CorelDraw, Adobe After Effect and many more to design creative
                  arts.
                </p>
              </div>
            </div>
          </Tween>
        </Reveal>
      </div>
    </Fragment>
  );
}

export default Experience;
