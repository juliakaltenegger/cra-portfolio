import React from "react";
import githubLogo from "./github.svg";
import twitterLogo from "./twitter.svg";
import instagramLogo from "./instagram.svg";
import linkedinLogo from "./linkedin.svg";

let data = {
  name: "Julia E. Kaltenegger",
  role: "UX / UI designer & (hopefully) soon-to-be Frontend Developer",
  roleDescription: ""
};

export default function Header() {
  return (
    <>
      <header id="home">
        <nav id="nav-wrap">
          <ul id="nav" className="nav">
            <li className="current">
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#resume">Resume</a>
            </li>
            <li>
              <a href="#portfolio">Works</a>
            </li>
            <li>
              <a href="#testimonials">Testimonials</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline"> {data.name}.</h1>
            <h3 style={{ color: "#fff", fontFamily: "sans-serif " }}>
              {data.role}.{data.roleDescription}
            </h3>
            <hr />
            <ul className="social">
              <li>
                <a href="https://www.linkedin.com/julia-e-kaltenegger">
                  <img src={linkedinLogo} alt="LinkedIn Logo" />
                </a>
              </li>
              <li>
                <a href="https://github.com/julialearnscoding">
                  <img src={githubLogo} alt="Github Logo" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/julia_k_ailuj">
                  <img src={twitterLogo} alt="Twitter Logo" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/juelka/">
                  <img src={instagramLogo} alt="Instagram Logo" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="scrolldown">
          <a href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    </>
  );
}
