import React from "react";
import Links from "./Links";
import user from "../data/user";

function About(props) {

  if(!props.bio){
    return(
    <>
      <div id="about">
       <h2>About Me</h2>
       <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
       {/* add your <Links /> component here */}
       <Links linkedin={user.links.linkedin} github={user.links.github}/>
      </div>
    </>
    )
    }else{
      return (
        <div id="about">
       <h2>About Me</h2>
       <p>{props.bio}</p>
       <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
       {/* add your <Links /> component here */}
       <Links linkedin={user.links.linkedin} github={user.links.github}/>
      </div>
      )
  }
  // return (
  //   <div id="about">
  //     <h2>About Me</h2>
  //     <p>{props.bio}</p>
  //     <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
  //     {/* add your <Links /> component here */}
  //     <Links linkedin={user.links.linkedin} github={user.links.github}/>
  //   </div>
  // );
}

export default About;
