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
                <h4>Epam System, Vilnius</h4>
                <h5>Software Test Automation Engineer | February 2022 - Present </h5>
                <p>
                Designing and developing test automation scripts.
                Using test automation guidelines.
                Researching issues in software through testing.
                Collaborating with QA Analysts and Software Developers to develop solutions.
                Keeping updated with the latest industry developments.
                Working in the agile environment with frequently changing requirements and features set.
                Writing Test cases and Test plans according to requirements
                </p>
              </div>
              <div className="experience__text">
                <h4>Western Union, Vilnius</h4>
                <h5>IT Technical Support Engineer | January 2022 - August 2022</h5>
                <p>
                Performs routine maintenance of computer/network systems
                Troubleshooting
                Monitors equipment and application use to ensure optimal performance
                Provides Tier I & 2 IT support to the business and external customers.
                Explains and provides IT solutions to customers in non-technical and comprehensible terms
                Respond to inquiries about hardware or software issues
                Generating trouble tickets, managing trouble reports, and monitoring their progress and resolution.
                </p>
              </div>
              <div className="experience__text">
                <h4>Freelancer, Global</h4>
              <h5>Software Engineer | July 2020 - Jan 2022 </h5>
                <p>
                Create quality mockups and prototypes.
                Design mobile-based features
                Optimize applications for maximum speed,
                Get feedback from, and build solutions for, users and clients.
                Stay up-to-date on emerging technologies
                </p>
              </div>
              <div className="experience__text">
                <h4>Ferrai World, Abu Dhabi</h4>
                <h5>Software Engineer | May, 2020 - September 2021</h5>
                <p>
                Provided information by collecting, analyzing, and summarizing development and service issues.
                Protected operations by keeping information confidential.
                Investigation on the problem area.
                Followed the software development lifecycle.
                Modified HTML, React and CSS pages to optimize pages performance for faster loading.
                Designed and executed a brand new staff management tool through ReactJS and Python to efficiently manage
                the staff and their welfare.
                </p>
              </div>
              <div className="experience__text">
                <h4>Ferrai World, Abu Dhabi</h4>
                <h5>Customer Support | April 2018 - April 2020</h5>
                <p>
                Delivered information about the company's offerings.
                Provided proactive customer approach.
                Solved customers' complaints in a timely manner.
                Attended to customers calls and inquiries.
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
