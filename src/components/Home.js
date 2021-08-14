import React from 'react'
import TextLoop from "react-text-loop";
import About from './About'
import Avatar from 'react-avatar';
import Profile from "../img/profile.jpg";



class Home extends React.Component {
  render() {
    return (
      
      <div className="ui placeholder segment" id="home">
        <div className="about1">
        
        <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There! <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
              </h1>
              {/* <Avatar size={24} source={Profile} alt="priyanka" /> */}
              <img class="ui medium centered responsive circular image" src={Profile}></img>
              {/* <img src={Profile} className="img-fluid" alt="avatar" /> */}
            <h1>I AM &nbsp;
            <TextLoop>
           
              <span className='myself'> PRIYANKA.</span>
              <span className='myself'>A JAVASCRIPT DEVELOPER.</span>
              <span className='myself'> A SOFTWARE DEVELOPER.</span>
            </TextLoop>{" "}
            </h1>
            
        </div> 
       <About></About>
      </div>
    )
  }
}

export default Home;