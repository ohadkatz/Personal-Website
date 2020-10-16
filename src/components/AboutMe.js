import React, { Component } from "react";
import "./AboutMe.css";
const { $ } = window;

class AboutMe extends Component {
  componentDidMount() {
    $(".collapsible").collapsible();
    $(".scrollspy").scrollSpy("methodName");
  }

  render() {
    return (
      <div className="pushin ">
        <ul className="collapsible popout">
          <li>
            <div className=" collapsible-header">ABOUT ME</div>
            <div className="collapsible-body center-align">
              <img
                src="https://avatars1.githubusercontent.com/u/20158647?s=460&v=4"
                alt="ohad"
                style={{ width: 200, height: 200 }}
              />
              <div>
                <span>
                  {" "}
                  Hello! My name is Ohad Katz. I am a Software Developer working
                  at Centene Corporation, and a recent graduate of Computer
                  Science from the University at Buffalo. During my 4 years of
                  college, I fell in love with the world of cyber security,
                  DevOps and performance testing and decided to devote myself to
                  the field. With this interest, I joined Centene's team,
                  helping my team manage their new change to an agile, devops
                  focused work environment. To do this, I developed more
                  streamlined functional and regression testing in Python
                  utilizing newer technology such as containers and helped lead
                  the charge to cloud based implementations through AWS. I'm
                  hoping to continue this pursuit towards a DevOps focused
                  career, one thats built on utilizing the latest and greatest
                  technology to help not only developers build the best code
                  they can, but to engage with the consumers of their products.
                  I hope that if you are on this site, you are interested in
                  seeing what I can do, so I encourage you to take a look at my
                  resume to get a glimpse of some of my accomplishments, and
                  feel free to reach out to me on LinkedIn!{" "}
                </span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default AboutMe;
