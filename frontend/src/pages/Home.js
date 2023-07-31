import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GithubIcon from "@mui/icons-material/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>
          Hi, my name is <strong>Brian Furaha</strong>
        </h2>
        <div className="prompt">
          <p>
            A fullstack software developer with a passion for learning and
            creating.
          </p>
          <LinkedInIcon />
          <EmailIcon />
          <GithubIcon />
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>
              Reactjs, JavaScript, HTML, CSS and BootStrap, Frameworks and
              Libraries, Version Control, Testing and Debugging.
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>PHP, Java, Phython, Git, MySql</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>Visual Basic, c++</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
