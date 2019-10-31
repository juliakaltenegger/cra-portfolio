import React from "react";
import styled from "styled-components";

let data = {
  education: [
    {
      UniversityName: "Vienna University of Business & Economics",
      specialization: "International Business (Cross Functional Managment)",
      MonthOfPassing: "Nov",
      YearOfPassing: "2019",
      Achievements:
        "Exchange semester at Fundação Getúlio Vargas in São Paulo, Brazil (2017)",
    },
    {
      UniversityName: "UpLeveled",
      specialization: "Web Development Bootcamp",
      MonthOfPassing: "Sept - Nov",
      YearOfPassing: "2019",
      // Achievements: "Some Achievements",
    },
  ],
  work: [
    {
      CompanyName: "Ernst & Young",
      specialization: "Audit",
      MonthOfLeaving: "Oct",
      YearOfLeaving: "2018",
      Achievements: "Retail, Real Estate & Automotive",
    },
    {
      CompanyName: "kununu",
      specialization: "Marketing",
      MonthOfLeaving: "Nov",
      YearOfLeaving: "2016",
      Achievements: "Management of autonomous project (UX / UI design)",
    },
  ],
  // skillsDescription: "Your skills here",
  skills: [
    {
      skillname: "HTML5",
    },
    {
      skillname: "CSS",
    },
    {
      skillname: "Reactjs",
    },
    {
      skillname: "Figma",
    },
    {
      skillname: "PowerPoint",
    },
  ],
};

const BarExpand = styled.span`
  position: absolute;
  left: 0;
  top: 0;
  margin: 0;
  padding-right: 24px;
  background: #313131;
  display: inline-block;
  height: 42px;
  line-height: 42px;
  border-radius: 5px 0 0 5px;

  &.html5 {
    padding-right: 180px;
  }

  &.css {
    padding-right: 180px;
  }

  &.reactjs {
    padding-right: 140px;
  }
  &.figma {
    padding-right: 100px;
  }
  &.powerpoint {
    padding-right: 180px;
  }
`;

const Bars = styled.div`
  width: 95%;
  float: left;
  padding: 0;
  text-align: left;

  & ul {
    margin-top: 45px;
    list-style: none;
  }
  & li {
    position: relative;
    margin-bottom: 60px;
    background: #ccc;
    height: 42px;
    border-radius: 5px;
  }
  & li em {
    font: 15px "opensans-bold", sans-serif;
    color: #313131;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: normal;
    position: relative;
    top: -36px;
  }
`;

const Resume = styled.section`
  background: #fff;
  padding-top: 90px;
  padding-bottom: 72px;
  overflow: hidden;

  & a,
  & a:visited {
    color: #11abb0;
  }
  & a:hover,
  & a:focus {
    color: #313131;
  }

  & h1 {
    font-size: 18px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  & h1 span {
    border-bottom: 3px solid #11abb0;
    padding-bottom: 6px;
  }
  & h3 {
    font-size: 25px;
  }

  & .header-col {
    padding-top: 9px;
  }
  & .main-col {
    padding-right: 10%;
  }

  & .info {
    font-size: 16px;
    color: #6e7881;
    margin-bottom: 18px;
    margin-top: 9px;
  }
  & .info span {
    margin-right: 5px;
    margin-left: 5px;
  }
  & .date {
    font: 15px/24px "opensans-regular", sans-serif;
    margin-top: 6px;
  }
  & .education,
  & .work {
    margin-bottom: 48px;
    padding-bottom: 24px;
    border-bottom: 1px solid #e8e8e8;
  }
`;

export default function MyResume() {
  return (
    <Resume id="resume">
      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          {data.education &&
            data.education.map((item, index) => {
              return (
                <div className="row item" key={index}>
                  <div className="twelve columns">
                    <h3>{item.UniversityName}</h3>
                    <p className="info">
                      {item.specialization}
                      <span>&bull;</span>{" "}
                      <em className="date">
                        {item.MonthOfPassing} {item.YearOfPassing}
                      </em>
                    </p>
                    <p>{item.Achievements}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div className="row work">
        <div className="three columns header-col">
          <h1>
            <span>Work</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          {data.work &&
            data.work.map((item, index) => {
              return (
                <div className="row item" key={index}>
                  <div className="twelve columns">
                    <h3>{item.CompanyName}</h3>
                    <p className="info">
                      {item.specialization}
                      <span>&bull;</span>{" "}
                      <em className="date">
                        {item.MonthOfLeaving} {item.YearOfLeaving}
                      </em>
                    </p>
                    <p>{item.Achievements}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>Skills</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <p>{data.skillsDescription}</p>

          <Bars>
            <ul>
              {data.skills &&
                data.skills.map((item, index) => {
                  return (
                    <li key={index}>
                      <BarExpand
                        className={` ${item.skillname.toLowerCase()}`}
                      ></BarExpand>
                      <em>{item.skillname}</em>
                    </li>
                  );
                })}
            </ul>
          </Bars>
        </div>
      </div>
    </Resume>
  );
}
