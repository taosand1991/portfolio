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
          <img src="./static/images/my_pic.jpg" alt="" />
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
                Experienced Software Developer adept in bringing forth expertise
                in design, installation, testing, and maintenance of software
                systems. Proficient in various platforms, languages. Experienced
                with the latest cutting-edge development tools and procedures.
                Able to effectively self-manage during independent projects, as
                well as collaborate as part of a productive team.
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
                I am a graduate of Agricultural Economics with background in
                marketing. I later follow my passion to become a developer and
                designer thereby using my skills to solve problems arising from
                Internet Technology world. I design and create web applications
                and mobile applications on my free time. I make great designs to
                appeal to the visual world and as well write programmatic code
                to suit my potential client needs. Currently, I am a freelancer
                and looking forward to secure a full-time employment soon. I
                have more than a year experience in developing web apps and
                designing business cards, fliers, cover-art and so many more.
              </p>
            </Tween>
            <Tween
              to={{ opacity: 1 }}
              ease="back.out(1.2)"
              stagger={0.5}
              delay={5.5}
            >
              <div className="cv-button">
                <a href="./static/images/Taofeek.pdf" download="resume">
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
