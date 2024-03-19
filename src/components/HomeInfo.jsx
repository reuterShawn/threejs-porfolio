import React from "react";
import { arrow } from "../assets/icons";
import { Link } from "react-router-dom";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <InfoBox
      text="Hellow I am Shawn, a software developer from Minnesota"
      link="/home"
      btnText=""
    />
  ),
  2: <InfoBox text="Worked with" link="/about" btnText="Learn More" />,
  3: (
    <InfoBox
      text="Build multiple projects over the years"
      link="/projects"
      btnText="Visit my portfolio"
    />
  ),
  4: (
    <InfoBox
      text="Need a project done or looking for a dev? I'm just a few keystrokes away"
      link="/contact"
      btnText="Lets Talk"
    />
  ),
};
const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
