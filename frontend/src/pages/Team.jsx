import React from "react";
import "./style/team.css";
import image from "../assets/LinkedIn_logo_initials.webp";

const Team = () => {
  const scrollToSection = () => {
    const section = document.getElementById("target-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const ExecutiveMembers = [
    {
      id: 1,
      name: "Vivaan Kapoor",
      designation: "Co-Lead",
      imageUrl: "https://randomuser.me/api/portraits/men/11.jpg",
      linkedinUrl: "https://www.linkedin.com/in/vivaankapoor123/",
    },
    {
      id: 2,
      name: "Meera Joshi",
      designation: "Co-Lead",
      imageUrl: "https://randomuser.me/api/portraits/women/21.jpg",
      linkedinUrl: "https://www.linkedin.com/in/meerajoshi09/",
    },
  ];

  const CoreMembers = [
    {
      id: 1,
      name: "Ayaan Chawla",
      designation: "Associate App-dev",
      imageUrl: "https://randomuser.me/api/portraits/men/15.jpg",
      linkedinUrl: "https://www.linkedin.com/in/ayaanchawla/",
    },
    {
      id: 2,
      name: "Ishita Reddy",
      designation: "Associate RIOT",
      imageUrl: "https://randomuser.me/api/portraits/women/23.jpg",
      linkedinUrl: "https://www.linkedin.com/in/ishitareddy/",
    },
    {
      id: 3,
      name: "Karan Kapoor",
      imageUrl: "https://randomuser.me/api/portraits/men/18.jpg",
      linkedinUrl: "https://www.linkedin.com/in/karankapoor/",
    },
    {
      id: 4,
      name: "Nisha Verma",
      imageUrl: "https://randomuser.me/api/portraits/women/40.jpg",
      linkedinUrl: "https://www.linkedin.com/in/nishaverma/",
    },
    {
      id: 5,
      name: "Raghav Anand",
      imageUrl: "https://randomuser.me/api/portraits/men/25.jpg",
      linkedinUrl: "https://www.linkedin.com/in/raghavanand/",
    },
    {
      id: 6,
      name: "Diya Roy",
      imageUrl: "https://randomuser.me/api/portraits/women/31.jpg",
      linkedinUrl: "https://www.linkedin.com/in/diyaroy/",
    },
    {
      id: 7,
      name: "Veer Saxena",
      imageUrl: "https://randomuser.me/api/portraits/men/33.jpg",
      linkedinUrl: "https://www.linkedin.com/in/veersaxena/",
    },
    {
      id: 8,
      name: "Sana Ali",
      imageUrl: "https://randomuser.me/api/portraits/women/36.jpg",
      linkedinUrl: "https://www.linkedin.com/in/sanaali/",
    },
    {
      id: 9,
      name: "Yuvraj Thakur",
      imageUrl: "https://randomuser.me/api/portraits/men/39.jpg",
      linkedinUrl: "https://www.linkedin.com/in/yuvrajthakur/",
    },
    {
      id: 10,
      name: "Tanya Nair",
      imageUrl: "https://randomuser.me/api/portraits/women/45.jpg",
      linkedinUrl: "https://www.linkedin.com/in/tanyanair/",
    },
    {
      id: 11,
      name: "Rudra Jain",
      imageUrl: "https://randomuser.me/api/portraits/men/48.jpg",
      linkedinUrl: "https://www.linkedin.com/in/rudrajain/",
    },
    {
      id: 12,
      name: "Shreya Sen",
      imageUrl: "https://randomuser.me/api/portraits/women/52.jpg",
      linkedinUrl: "https://www.linkedin.com/in/shreyasen/",
    },
    {
      id: 13,
      name: "Aditya Rao",
      imageUrl: "https://randomuser.me/api/portraits/men/60.jpg",
      linkedinUrl: "https://www.linkedin.com/in/aditya-rao/",
    },
    {
      id: 14,
      name: "Neha Kulkarni",
      imageUrl: "https://randomuser.me/api/portraits/women/62.jpg",
      linkedinUrl: "https://www.linkedin.com/in/nehakulkarni/",
    },
    {
      id: 15,
      name: "Aryan Bhatt",
      imageUrl: "https://randomuser.me/api/portraits/men/70.jpg",
      linkedinUrl: "https://www.linkedin.com/in/aryanbhatt/",
    },
  ];

  return (
    <>
      <div className="content">
        <div className="w-[80%] justify-center items-center flex flex-col">
          <div className="text-gray-600 font-semibold justify-center items-center flex">
            <p className="para">About ou Past members</p>
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
          <h2 className="h2">Executive Board</h2>
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
                className="profile-image"
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
