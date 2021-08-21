import React from 'react'

class Projects extends React.Component {
  render() {
    return (
      <div className="ui placeholder segment" id="projects">
        <div className="project">
          <h1 style={{ paddingBottom: 15 }} className="heading">
            MY RECENT <span id="Skillhighlight">WORKS</span>
          </h1>
          <p id="para">HERE ARE FEW PROJECTS I HAVE WORKED ON RECENTLY</p>
          
          <div class="ui two column doubling  grid container tiny images responsive">
            <div class="column">
              <div className="tech-icons">
               <h4>DT-RCA</h4>
               <p id="project_details">
                Designed automated reports using Node.JS,Google maps APIs which provided KPI analysis for 3G and 4G.Technology used:Javascript,Node.js,
                MongoDB,Express.js
               </p>
               <button class="ui purple button responsive" id="view">LINK NOT AVAILABLE</button>

              </div>
              </div>
              <div class="column">
              <div className="tech-icons">
               <h4>EVOLVED AUDIT BOT</h4>
               <p id="project_details">
               Generated multiple audit reports using Python and its libraries for various vendors like Bharti, Ericsson, Huawei, Nokia that lessened
                manual efforts.	Developed dashboard for multiple servers with little to no supervision Single handedly using Python,HTML,CSS.Technology and DB 
                used-Python,Pandas,MongoDb,GIT,LINUX

               </p>
               <button class="ui  purple button responsive" id="view">LINK NOT AVAILABLE</button>

              </div>
              </div>
              <div class="column">
              <div className="tech-icons">
               <h4>PORTFOLIO</h4>
               <p id="project_details">
               Created portfoloio using HTML,CSS and Javascript.
               Purpose was to enahnce my knowldege
               </p>
               <button variant="primary" class="ui purple button responsive" id="view">VIEW PROJECT</button>
               </div>

              </div>
              <div class="column">
              <div className="tech-icons">
               <h4>PORTFOLIO</h4>
               <p id="project_details">
               Created portfoloio using React.Js.
               Purpose was to enahnce my knowldege
               </p>
               <button class="ui purple button responsive" id="view">VIEW PROJECT</button>
               </div>

              </div>
              <div class="column">
              <div className="tech-icons">
               <h4>TODO APP</h4>
               <p id="project_details">
               Created a basic To-do App backend functionality using Node JS, MongoDB, JWT,REST API for authentication
• The app has a feature where an authenticated user can be allowed to perform basic CRUD application
               </p>
               <button class="ui  purple button responsive" id="view">VIEW PROJECT</button>

              </div>
              </div>
            
            </div>
           
           
          </div>
    

        </div>
     
    )
  }
}

export default Projects;