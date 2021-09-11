import React from 'react'
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import pdf from "../img/priyanka_resume.pdf";

class Resume extends React.Component {
  render() {
    return (
      <div className="ui placeholder segment" id="resume">
        <div className="resume">
          <h1 className="heading">
          RESUME
          </h1>
         
          
               <button class="ui  purple button responsive" id="view"> 
               <a  href={pdf} target="_blank">  <AiOutlineDownload />
            &nbsp;Download CV</a>
             
                 </button>

           
         
        </div>
      </div>
    )
  }
}

export default Resume;