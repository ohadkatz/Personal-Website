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
                  Hello! My name is Ohad Katz, I am a graduate of Computer
                  Science from the University at Buffalo. During my 4 years of
                  college, I fell in love with the world of cyber security, and
                  decided to devote myself to the field. With this interest, I
                  joined an independent study named UB Network Defense, in which
                  I taught college students the importance of system security. I
                  also helped facilitate and manage a variety of cybersecurity
                  competitions for both college level and high school students,
                  giving students a real world look at a worst case corporate
                  security breach. I am hoping to leverage both my cybersecurity
                  experience, as well as my computer science background to
                  contribute to the cyber security world in a new and unique
                  way. I hope that if you are on this site, you are interested
                  in seeing what I can do, so I encourage you to take a look at
                  my resume to get a glimpse of my projects, and github to see a
                  more in depth view of some of these projects!{" "}
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
