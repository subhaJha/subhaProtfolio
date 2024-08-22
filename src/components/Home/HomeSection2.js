import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import HomeAboutCard from "./HomeAboutCard";
import myPic from "../../Assets/subha photo.png";
import HomeSkills from "./HomeSkills";
import HeadingDivider from "../UI-Elements/HeadingDivider";

const HomeSection2 = () => {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <h1> </h1>
          <HomeAboutCard
            imgPath={myPic}
            title="Meet the Creator"
            description="I'm Subha Jha, hailing from the charming city of Malda, Westbengal, India. Armed with a B.C.A & M.C.A degree. I'm more intreasted in software development. I'm fimiliar with HTML, CSS, JS, ReactJS, NodeJS, BootStrap, MySQL, Javascript, Vue, Quasar, Certified Databricks Engineer. If you are a recruiter looking for a skillful person,you can contact me."
          />
        </Row>
        <Row>
          <Col md={12} className="home-about-skills ">
            <h1 className="heading-name-skills">Tools & Technologies</h1>
            <HeadingDivider color={"purple"} />

            <p className="home-about-body">
              I'm fimiliar with couple of Languages, Tools & Technologies. I
              mainly works in following Technologies
            </p>
            <HomeSkills />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
export default HomeSection2;
