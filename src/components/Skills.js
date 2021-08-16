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



class Skill extends React.Component {
  render() {
    return (
      <div className="ui placeholder segment" id="skills">
        <div className="skill">
          <h1 style={{ paddingBottom: 15 }} className="heading">
            Professional <span id="Skillhighlight">SkillSet</span>
          </h1>
          
          <div class="ui eight column doubling  grid container tiny images responsive">
            <div class="column">
              <DiJavascript1 className="tech-icons" />
            </div>
            <div class="column">
              <DiNodejs className="tech-icons" />
            </div>
            <div class="column">
              <DiHtml5 className="tech-icons" />
            </div>
            <div class="column">
              <DiCss3 className="tech-icons" />
            </div>
            <div class="column">
              <DiReact className="tech-icons" />
            </div>
            <div class="column">
              <DiMongodb className="tech-icons" />
            </div>
            <div class="column">
              <DiPython className="tech-icons" />
            </div>
            <div class="column">
              <DiJava className="tech-icons" />
            </div>
            <div class="column">
              <DiGit className="tech-icons" />
            </div>
            <div class="column">
              <DiLinux className="tech-icons" />
            </div>
          </div>
      
          <h1 style={{ paddingBottom: 15 }} className="heading">
            <span id="Skillhighlight">Tools</span> I Use
          </h1>
         
         
          <div class="ui eight column doubling  grid container tiny images responsive">
            <div class="column">
              <DiGithub className="tech-icons" />
            </div>
            <div class="column">
              <DiVisualstudio className="tech-icons" />
            </div>

          </div>
          

        </div>
      </div>
    )
  }
}

export default Skill;