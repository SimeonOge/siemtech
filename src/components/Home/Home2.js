import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/pc (3).jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> HTMl, CSS, Bootstrap, Javascript, React and Wordpress. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="purple">
                  Data Entry, Copywriting and UI/UX Design.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Wordpress</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>CONTACT ME</h1>

            <div className="container">
      <header className="mb-5 pb-4">
        <p className="font-weight-bold text-primary text-uppercase letter-spacing-3">Call me, maybe.</p>
        
      </header>
      <div className="row" >
        <div className="col-lg-3 col-md-6 mb-4 mb-lg-0" >
          <div className="px-4 py-5 text-center contact-item shadow-sm" style={{backgroundColor: "black"}}><i className="fas fa-map-marker-alt fa-2x mb-4"></i>
            <h4 className="contact-item-title h5 text-uppercase">Location</h4>
            <p className="text-small mb-0">Lagos, Nigeria</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
          <div className="px-4 py-5 text-center contact-item shadow-sm" style={{backgroundColor: "black"}}><i className="fas fa-mobile fa-2x mb-4"></i>
            <h4 className="contact-item-title h5 text-uppercase">Phone</h4>
            <p className="text-small mb-0">+2340938781279</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4 mb-lg-0"  ><a className="px-4 py-5 text-center contact-item shadow-sm d-block reset-anchor" href="https://www.siemtech.netlify.app" style={{backgroundColor: "black"}}><i className="fas fa-globe-americas fa-2x mb-4"></i>
            <h4 className="contact-item-title h5 text-uppercase" style={{color: "white" }}>Website</h4>
            <p className="text-small mb-0 text-light" style={{color: "white"}}></p>Siemtech.com</a></div>
        <div className="col-lg-3 col-md-6 mb-4 mb-lg-0"><a className="px-4 py-5 text-center contact-item shadow-sm d-block reset-anchor" href="mailto:simeondrizzy62@gmail.com" style={{backgroundColor: "black"}}><i className="fas fa-envelope fa-2x mb-4"></i>
            <h4 className="contact-item-title h5 text-uppercase" style={{color: "white"}}>Email</h4>
            <p className="text-small mb-0 text-light" style={{color: "white"}} >simeondrizzy62@gmail.com</p></a></div>
      </div>
    </div>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/SimeonOge"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/simeon-oge-a587a019a"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/simeon-oge-a587a019a"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
