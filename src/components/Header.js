import React from "react";

let data = {
  name: "Julia Kaltenegger",
  role: "UX / UI designer & (hopefully) soon-to-be Frontend Developer",
  roleDescription: "I like developing concepts for websites XXXX.",
  socialLinks: [
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/rahul-bhatia-67ba08121/",
      className: "fa fa-linkedin"
    },
    {
      name: "github",
      url: "http://github.com/rbhatia46",
      className: "fa fa-github"
    },
    {
      name: "skype",
      url: "http://twitter.com/rbhatia46",
      className: "fa fa-twitter"
    }
  ]
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
            <h1 className="responsive-headline">I am {data.name}.</h1>
            <h3 style={{ color: "#fff", fontFamily: "sans-serif " }}>
              I am a {data.role}.{data.roleDescription}
            </h3>
            <hr />
            <ul className="social">
              {data.socialLinks &&
                data.socialLinks.map(item => {
                  return (
                    <li key={item.name}>
                      <a href={item.url} target="_blank">
                        <i className={item.className}></i>
                      </a>
                    </li>
                  );
                })}
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
