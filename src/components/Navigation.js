import React from 'react'
import TextLoop from "react-text-loop";
import {
  DiJavascript1,
  DiHtml5,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiCss3,
  DiReact,
  DiLinux,
  DiJava,
  DiVisualstudio,
  DiGithub,
} from "react-icons/di";



class Navigation extends React.Component {
  render() {
    return (
      <div class="ui inverted menu fixed stackable">
      <a class="item" href="#home" >
        Home
      </a>
      <a class="item" href="#aboutME">
        About
      </a>
      <a class="item" href="#projects">
        Project
      </a>
      <a class="item" href="#resume">
        Resume
      </a>
      <a class="item" href="#contact">
        Contact
      </a>
    </div>
    )
  }
}

export default Navigation;