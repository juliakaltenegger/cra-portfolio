import React from "react";
import profilePic from "./profile-pic.jpg";

let data = {
  name: "Julia E. Kaltenegger",
  address: "Vienna, Austria",
  email: "Email: julia.e.kaltenegger@gmail.com",
};

export default function About() {
  return (
    <section id="about">
      <div className="row">
        <div className="nine columns main-col">
          <h2>About Me</h2>
          <p>
            "I am currently participating in a 3-months coding bootcamp by{" "}
            <a href="https://www.upleveled.io">UpLeveled</a>. Taking advantage
            of the additional qualifications I am acquiring here, I am aiming at
            creating a competitive advantage in order to advance in my career as
            a UX / UI designer."
          </p>
          <div className="three columns">
            <img className="profile-pic" src={profilePic} alt="" />
          </div>
          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                <span>{data.name}</span>
                <br></br>
                <span>{data.address}</span>
                <br></br>

                <a href="mailto:julia.e.kaltenegger@gmail.com">
                  <span> {data.email}</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
