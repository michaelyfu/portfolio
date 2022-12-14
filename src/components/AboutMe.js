import "bootstrap/dist/css/bootstrap.min.css";
import Image from "react-bootstrap/Image";
import { React, useState } from "react";
import "../styles.scss";
import "../App.css";
import "./AboutMe.css";
import { Link, Route, Routes } from "react-router-dom";
import skillsData from "../assets/skills.json";
import SkillsCard from "./SkillsCard";
import Headshot from "../images/headshot.jpeg";
import Animation from "../images/animation.gif";

function AboutMe() {
  const skillsCard = {
    display: "inline-flex",
    color: "whitesmoke",
    backgroundColor: "mediumseagreen",
    padding: ".75vw",
    margin: ".25vw",
    borderRadius: "4px",
  };

  const skillsArray = ["HTML", "CSS", "JS", "React", "Python", "Java"];

  return (
    <div className="aboutMe">
      <div
        style={{ backgroundColor: "none", position: "relative" }}
        className="imageWrapper2"
      >
        {/* <iframe src="https://embed.lottiefiles.com/animation/53887" title="hello"></iframe>    */}
        {/* <iframe
          // src="https://embed.lottiefiles.com/animation/9911"
          src={Animation}
          className="iframe"
          title="animation"
        ></iframe> */}
        {/* <Image src={Headshot} className="circular--landscape"></Image> */}
        <img src={Animation} alt="animation" className="animation"></img>
      </div>
      <h2 className="titleGradient">Hello. I'm Michael.</h2>
      <p style={{ fontSize: "1.35rem" }}>
        I'm a second year student at Brown University studying Computer
        Science-Economics. At school, I'm an TA for our Data Structures and
        Algorithms course and leading a project for a Fortune 15
        Telecommunications Company for Brown Consulting Club. Outside of
        coursework, I'm also a competitive chess player, compete on Brown's
        table tennis team, and play intramural basketball. I have a deep
        interest in software and data and I'm currently seeking summer
        opportunities where I can leverage my skills in a software engineering,
        data science, or quantitative finance role.
      </p>
      {/* <h2>Skills</h2>
      <div className="skillsWrapper">
        {skillsArray.map((item) => (
          <ul key={item} style={skillsCard}>
            {item}
          </ul>
        ))}
      </div> */}
    </div>
  );
}

export default AboutMe;
