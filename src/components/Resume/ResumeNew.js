import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/Soumyajit-Behera.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink =
  "https://raw.githubusercontent.com/soumyajit4419/portfolio/master/src/Assets/Resume_Soumyajit_Behera.pdf";

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
      <Particle />
      <Container>
      <section id="expertise">
      <div className="container">
        <header className="mb-5 pb-4">
          <p className="font-weight-bold text-primary text-uppercase letter-spacing-3">Batman would be jealous.</p>
          <h2 className="text-uppercase lined">Expertise</h2>
        </header>
        <div className="row">
          <div className="col-md-6 mb-5">
            <h3 className="h4" style={{textDecoration: "underline"}} ><span className="text-primary mr-2">01</span>Ecommerce</h3>
            <p className="text-light text-small ml-4 pl-3" style={{fontSize: "20px"}}>As a business enthusiast, I create innovative solutions to enable business owners reach their target audience using platforms like Woocommerce and Shopify..</p>
          </div>
          <div className="col-md-6 mb-5">
            <h3 className="h4" style={{textDecoration: "underline"}} ><span className="text-primary mr-2">02</span>UX/UI Design</h3>
            <p className="text-light text-small ml-4 pl-3" style={{fontSize: "20px"}}>I plan and iterate a site's structure and layout once the proper information and architecture is in place
,to create a beautiful user experience making use of design tools like Figma and Adobe XD..</p>
          </div>
          <div className="col-md-6 mb-5 mb-md-0">
            <h3 className="h4" style={{textDecoration: "underline"}} ><span className="text-primary mr-2">03</span>Web Design</h3>
            <p className="text-light ml-4 pl-3" style={{fontSize: "20px"}}>I design websites that target all mannner of devices for optimuim user satisfaction., I create successful websites that are responsive,fast,easy to use and
built to the best standards...</p>
          </div>
          <div className="col-md-6" >
            <h3 className="h4" style={{textDecoration: "underline"}} ><span className="text-primary mr-2">04</span>Web Development</h3>
            <p className="text-light text-small ml-4 pl-3 " style={{fontSize: "20px"}}>I develop, design and layout and in all stages of design, coding, and testing of Web 
applications, and in the formation, planning, and implementation of online business ventures through my knowledge of of PHP, HTML, CSS, Bootstrap, React and JavaScript/jQuery....</p>
          </div>
        </div>
      </div>
    </section>

     </Container>

    <Container>

    <section className="mt-5" id="education" style={{backgroundColor: "inherit" }}>
      <div className="container">
        <header className="mb-5 pb-4">
          <p className="font-weight-bold text-primary text-uppercase letter-spacing-3">Lazy isn't in my vocabulary.</p>
          <h2 className="text-uppercase lined">Education</h2>
        </header>
       
        <ul className="timeline">
              
              <li className="timeline-item ml-3 pb-4">
                <div className="timeline-arrow"></div>
                <div className="row no-gutter">
                  <div className="col-lg-5 mb-4 mb-lg-0">
                    <p className="font-weight-bold mb-2 text-primary text-small">2017 - 2021 </p>
                    <h2 className="h5 mb-0 text-uppercase">Statistics/Computer Science</h2>
                    <p className="text-small mb-0">JS Tarka Federal University</p><span className="small text-light">Nigeria</span>
                  </div>
                  <div className="col-lg-7">
                    <p className="text-light">As a capstone project, I built an Online Based Examination System For secondary schools in rural areas.</p>
                  </div>
                </div>
              </li>
             
              <li className="timeline-item ml-3 pb-4">
                <div className="timeline-arrow"></div>
                <div className="row no-gutter">
                  <div className="col-lg-5 mb-4 mb-lg-0">
                    <p className="font-weight-bold mb-2 text-primary text-small">Oct 2020 - Feb 2021 </p>
                    <h2 className="h5 mb-0 text-uppercase">Front-End Fundamentals.</h2>
                    <p className="text-small mb-0"> Pirple IT Bootcamp</p><span className="small text-light">E-Learning</span>
                  </div>
                  <div className="col-lg-7">
                    <p className="text-light">Certified in Front End Development, building the visual components of a website. I use HTML, CSS, Javascript and React to build fast interactiveand responsive websites.</p>
                  </div>
                </div>
              </li>
              
              <li className="timeline-item ml-3 pb-4">
                <div className="timeline-arrow"></div>
                <div className="row no-gutter">
                  <div className="col-lg-5 mb-4 mb-lg-0">
                    <p className="font-weight-bold mb-2 text-primary text-small">Mar 2019 - Sep 2019</p>
                    <h2 className="h5 mb-0 text-uppercase">Web Development.</h2>
                    <p className="text-small mb-0">IT Academy</p><span className="small text-light">Lagos, Nigeria</span>
                  </div>
                  <div className="col-lg-7">
                    <p className="text-light">Web development and design through the use of several platforms and tools. Gained valuable knowledge of the Wordpress CMS, PHP and Figma design tool.</p>
                  </div>
                </div>
              </li>
        </ul>
      </div>
    </section>
    </Container>
      </Container>
    </div>
  );
}

export default ResumeNew;
