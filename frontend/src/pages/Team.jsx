import React from "react";
import "./style/team.css";
import image from "../assets/LinkedIn_logo_initials.webp";

// ✅ import from your data file
import { ExecutiveMembers, CoreMembers } from "../TeamData/Teamdata";

const Team = () => {
  const scrollToSection = () => {
    const section = document.getElementById("target-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="content">
        <div className="w-[80%] justify-center items-center flex flex-col">
          <div className="text-gray-600 font-semibold justify-center items-center flex">
            <p className="para">About our Past members</p>
          </div>
          <h1 className="h1">Team of GAT</h1>
          <div className="but">
            <button onClick={scrollToSection} className="team-button">
              MEET THE TEAM
            </button>
          </div>
        </div>
      </div>

      <div className="content1">
        <div className="content2">
          <h2 className="h2">Executive  Board</h2>
          <p className="texteb">
            Explore our diverse range of projects that showcase the creativity
            and technical prowess of our members. From groundbreaking apps to
            innovative solutions, our projects highlight the impact of applied
            technology.
          </p>
        </div>
      </div>

      <div className="outer" id="target-section">
        <div className="team-container">
          {ExecutiveMembers.map((member) => (
            <div key={member.id} className="team-member">
              <img
  src={member.imageUrl}
  alt={member.name}
  className="w-40 h-40 rounded-full object-cover"
/>

              <div className="team-team">
                <div className="team-info">
                  <h2 className="h3">{member.name}</h2>
                  <p className="p">{member.designation}</p>
                </div>
                <a
                  href={member.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="linkedin" src={image} alt="LinkedIn" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <h1 className="core">GAT Club</h1>

      <div className="outer-core">
        <div className="core-container">
          {CoreMembers.map((member) => (
            <div key={member.id} className="core-member">
              <img
                src={member.imageUrl}
                alt={member.name}
                className="profile-image"
              />
              <div className="team-team">
                <div className="team-info">
                  <h2 className="h4">{member.name}</h2>
                </div>
                <a
                  href={member.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="linkedin1" src={image} alt="LinkedIn" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Team;
