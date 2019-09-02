import React from "react";
import profilePic from "./profile-pic.jpg";

let data = {
  name: "Julia Kaltenegger",
  aboutme:
    "I am currently participating in a 3-months coding bootcamp by UpLeveled. With the additional qualifications I am acquiring here, I am aiming at creating a competitive advantage in order to advance in my career as a UX / UI designer.",
  address: "Vienna, Austria",
  website: "https://julialearnscoding.github.io"
};

export default function About() {
  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img className="profile-pic" src={profilePic} alt="" />
        </div>

        <div className="nine columns main-col">
          <h2>About Me</h2>
          <p>{data.aboutme}</p>

          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                <span>{data.name}</span>
                <br></br>
                <span>{data.address}</span>
                <br></br>
                <span>{data.website}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
