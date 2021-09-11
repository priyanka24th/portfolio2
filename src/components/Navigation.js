import React from 'react'

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