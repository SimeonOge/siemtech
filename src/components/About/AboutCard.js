import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Simeon Oge </span>
            
            <br />An ambitious problem solver with a passion for online businesses, and who 
would like to join a team of like-minded developers.  
I am thorough and precise in everything I do, and has a keen interest in
technology, mobile applications and user experience. As someone who takes 
responsibility for my own personal development, I'm continually evaluating 
and upgrading my skills so that I can stay at the cutting edge of web 
development. 
Right now I'm  looking for a suitable position with a company where 
outstanding performance is recognised and where I can work on a variety of 
high profile projects.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing and Watching Football
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Siem.</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
