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
                <h5>Full Stack Developer | March 2018 - present</h5>
                <p>
                  I create web apps to meet client needs, with more than a year
                  of my experience as a developer, I have developed so many apps
                  that can be of help to organizations and personal use. Such
                  apps include: Weather app, Movies database, Sport App,
                  Entertainment App. I work with few libraries such as React for
                  front-end Application, Django for backend application. I work
                  with Python and Javascript. I am quite capable of working as a
                  team member, or independently. supervision.
                </p>
              </div>
              <div className="experience__text">
                <h4>As-Salam Graphical and Computer Services</h4>
                <h5>Graphic Designer | Jan 2017 - Dec 2019</h5>
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
