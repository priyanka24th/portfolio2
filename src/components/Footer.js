import React from 'react'
import TextLoop from "react-text-loop";
import About from './About'
import Profile from "../img/profile.jpg";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";



class Footer extends React.Component {
  render() {
    return (
      <Container fluid className="footer" id="contact">
       <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Priyanka Kumari</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/priyanka24th"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/priyanka-kumari-mern-dev/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
           
          </ul>
        </Col>
      </Row>
      </Container>
    )
  }
}

export default Footer
  