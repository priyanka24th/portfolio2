import React from 'react'
import { Container} from "react-bootstrap";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

class Footer extends React.Component {
  render() {
    return (
      <Container fluid className="footer" id="contact">
        <h3>Developed and designed by Priyanka kumari</h3>
        <div class="ui unordered horizontal list">
          <div class="item">
            <div class="content">
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
            </div>
          </div>
          <div class="item">

            <div class="content">
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
            </div>
          </div>

        </div>
      </Container>
    )
  }
}

export default Footer
