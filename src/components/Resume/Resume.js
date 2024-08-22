import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdf from "../../Assets/ResumeSubhaJha-1.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import "../../style.css";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import HeadingDivider from "../UI-Elements/HeadingDivider";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = () => {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="section-style">
        <h2 className="heading-mystory"> My Resume </h2>
        <HeadingDivider color={"white"} />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Col xs={12}>
            <div className="resume-message">
              <div className="resume-message-greet"> Hello there,</div>
              Thank you for visiting my profile. If you are impressed with my
              profile and skills, please let me know. You can download my
              current Resume/CV below. 
              <div className="resume-message-dec">Sincerely,</div>
              <div className="resume-message-dec">Subha Jha</div>
            </div>
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Col md={2} sm={2} className="resume-button">
            {" "}
            <Button
              variant="primary"
              href={pdf}
              target="_blank"
              style={{ maxWidth: "250px" }}
            >
              &nbsp;
              <AiOutlineDownload />
              &nbsp;&nbsp;Download CV&nbsp;
            </Button>
          </Col>
          
        </Row>

        <Row className="resume">
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 1} />
          </Document>
        </Row>
      </Container>
    </div>
  );
};

export default Resume;
