import React, { useState, useRef, useEffect } from "react";
import styles from "/src/Css/page.module.css";
import cross from "/src/assets/cross.svg";
import { googlecolor, data } from "/src/TeamData/ProjectData.js";
import MorProjects from "../components/ProjectPageComponents/MorProjects";
import pc from "/src/assets/Projectcard.jpg";
import img from "/src/assets/project.svg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const getUpdatedStyles = (color) => ({
  backgroundColor: color,
});

function Project() {
  const [display, setdisplay] = useState(false);
  const [num, setnum] = useState(0);
  const [datan, setdatan] = useState(0);
  const [color, setcolor] = useState(googlecolor[num]);
  const desc = useRef();
  const [projectdata, setdata] = useState(data[num]);

  useEffect(() => {
    setdata(data[datan]);
  }, [datan]);

  const handleNextCard = () => {
    const nextIndex = (num + 1) % googlecolor.length;
    const dataindex = (datan + 1) % data.length;
    setdatan(dataindex);
    setnum(nextIndex);
    setcolor(googlecolor[nextIndex]);
  };

  return (
    <>
      <div className={styles.main} style={getUpdatedStyles(color)}>
        <Navbar />
        {!display ? (
          <Card
            setdisplay={setdisplay}
            onNextCard={handleNextCard}
            color={color}
            datan={datan}
          />
        ) : null}
        {display ? (
          <ProjectDesc
            setdisplay={setdisplay}
            desc1={projectdata.desc1}
            desc2={projectdata.desc2}
            name={projectdata.Name}
            stats={projectdata.ProjectStat[0]}
            color={color}
          />
        ) : null}
        <Footer />
      </div>
    </>
  );
}

export default Project;

// Reusable Components

function Stats({ stats }) {
  return (
    <div className="flex gap-x-[15px] mt-[28px]">
      {["Members", "Projects", "Departments"].map((key, i) => (
        <div key={i}>
          <h3 className="font-bold text-[20px] lg:text-[45px]">
            {stats[key]}
          </h3>
          <p className="font-semibold text-[15px] lg:text-[25px]">{key}</p>
        </div>
      ))}
    </div>
  );
}

function Title({ content }) {
  return <h2 className={styles.name}>{content}</h2>;
}

function ProjectDesc({ setdisplay, desc1, desc2, name, stats, color }) {
  return (
    <div id="container1" className={styles.container1}>
      <div className={styles.crossf}>
        <div className="flex justify-end">
          <img
            src={cross}
            alt="close"
            className="lg:p-3 p-2 bg-[#f5f5f5] rounded-full mt-[20px] h-[30px] lg:h-[40px]"
            onClick={() => setdisplay(false)}
          />
        </div>

        <div className={styles.full}>
          <div className="flex items-start bg-slate-700 w-fit">
            <img src={img} alt="project illustration" className={styles.photo} />
          </div>
          <p className={styles.tl} style={getUpdatedStyles(color)}>
            Tl;DR
          </p>
          <Title content={name} />
          <div className={styles.desc}>
            <p>{desc1}</p>
            <p>{desc2}</p>
          </div>
          <p className="mt-4 font-bold text-[20px] lg:text-[40px]">
            Project Stats
          </p>
          <Stats stats={stats} />
        </div>
      </div>

      <div className="w-[90%]">
        <p className="bg-black text-white w-fit rounded-full lg:px-7 lg:py-3 lg:text-[18px] text-[14px] px-5 py-1 mt-7 font-semibold">
          More
        </p>
        <Title content={"More Projects"} />
        <p className={styles.more}>
          Have a look at other projects made by CSE(AIML)
        </p>

        {/* Desktop view: show 3 cards */}
        <div className="hidden lg:flex justify-between">
          <MorProjects color={color} getUpdatedStyles={getUpdatedStyles} />
          <MorProjects color={color} getUpdatedStyles={getUpdatedStyles} />
          <MorProjects color={color} getUpdatedStyles={getUpdatedStyles} />
        </div>

        {/* Mobile view: show 1 card only */}
        <div className="flex lg:hidden justify-center mt-5">
          <MorProjects color={color} getUpdatedStyles={getUpdatedStyles} />
        </div>
      </div>
    </div>
  );
}

function Card({ setdisplay, onNextCard, color, datan }) {
  return (
    <ProejctCard
      onNextCard={onNextCard}
      color={color}
      datan={datan}
      setdisplay={setdisplay}
    />
  );
}

function ProejctCard({ onNextCard, color, datan, setdisplay }) {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-32 p-8 mt-10 mb-[40px] md:flex-row">
      <button
        className="border-b-[3px] border-b-black text-2xl font-semibold"
        onClick={() => setdisplay(true)}
      >
        Open Card!
      </button>
      <div className="relative">
        <div
          className="relative z-20 flex h-[350px] w-[220px] flex-col justify-center gap-[20px] rounded-2xl bg-[#f5f5f5] p-[10px] pr-4 border-[1px] lg:w-[290px] lg:h-[410px] lg:p-[20px]"
        >
          <button
            className="bg-[#ea4335] h-[30px] w-[90px] rounded-full mt-6 text-white text-[15px] font-semibold"
            style={getUpdatedStyles(color)}
          >
            TL;DR
          </button>
          <h1 className="text-normal font-bold lg:text-xl">
            Lorem ipsum dolor sit amet consectetur.
          </h1>
          <div className="flex h-[250px] w-[250px]">
            <img
              className="rounded-lg h-[130px] lg:h-[230px]"
              src={pc}
              alt="project"
            />
          </div>
        </div>
        <div className="absolute left-[10px] top-[10px] z-10 h-[350px] w-[220px] rotate-[10deg] rounded-2xl bg-[#f5f5f5] border-[1px] lg:w-[290px] lg:h-[410px] lg:p-[20px]"></div>
        <div className="absolute left-[20px] top-[20px] z-0 h-[350px] w-[220px] rotate-[20deg] rounded-2xl bg-[#f5f5f5] border-[1px] lg:w-[290px] lg:h-[410px] lg:p-[20px]"></div>
      </div>
      <button
        className="border-b-[3px] border-b-black text-2xl font-semibold"
        onClick={onNextCard}
      >
        {datan === 6 ? "Start Over!" : "Next Card!"}
      </button>
    </div>
  );
}
