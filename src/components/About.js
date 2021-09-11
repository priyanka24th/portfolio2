import React from 'react';
import { Icon } from 'semantic-ui-react';
import about from "../img/about.png";

class About extends React.Component {
  render() {
    return (
      <div className="about">
      <h1>
      LET ME INTRODUCE MYSELF
      </h1>
      <hr></hr>
    
      <p id="aboutME">
      I am a Priyanka from  <span id="highlight">Patna, Bihar,India</span> <br/>
      I graduated from <span id="highlight">BIT MESRA</span> in the year <span id="highlight">2019 </span> <br/>
      with the specialization in <span id="highlight">Information Technology</span> <br/>
      I am a software developer with over <span id="highlight">2 years</span> 
      of experience in application development<br/>
      I currently Work at <span id="highlight">Ericsson Global India pvt ltd</span><br/>
      I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️<br/>
      I am fluent in classics like  <span id="highlight">Javascript, Python,HTML,CSS,MongoDb</span>
      <br/>
      My field of Interest's are building new  <span id="highlight">Web Technologies</span>
      <br/>
      Whenever possible, I also apply my passion for developing products with<br/> 
      <span id="highlight">Node.js and Modern Javascript Library and Frameworks  like 
      React.js</span> <br/>
      </p>      
      <img className="ui large centered responsive circular image" src={about}></img>
      <div className="hobbies">
        <h3>Apart from coding some other activities that I love to do are:</h3>
        <ul>
          <li><Icon inverted color='white' size='big' name='hand point right outline' />Playing Badminton</li>
          <li><Icon inverted color='white'  size='big' name='hand point right outline' />Listening To Music</li>
          <li><Icon inverted color='white'  size='big'name='hand point right outline' />Reading</li>
          <li><Icon inverted color='white'  size='big'name='hand point right outline' />Playing Cricket</li>
          <li><Icon inverted color='white'  size='big'name='hand point right outline' />Watching Shinchan and sarabhai vs sarabhai</li>
        </ul>

      </div>

      </div>
    )
  }
}

export default About;
