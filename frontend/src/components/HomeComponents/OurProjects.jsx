import React from "react";
import { useNavigate } from "react-router-dom";


const OurProjects = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="w-[80%] flex flex-col justify-center items-center">
        <button
          className="px-10 py-2 bg-gdsc-blue text-white rounded-3xl hover:opacity-90 transition-all projectsAnim"
          onClick={() => navigate("/projects")}
        >
          Our Projects
        </button>

        <h1 className="text-6xl font-semibold mt-6 projectsAnim">
          Our Projects
        </h1>
        <p className="w-[60%] text-gray-500 text-center mt-3 mb-10 projectsAnim">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
          numquam quis iste vitae autem accusantium asperiores, aperiam laborum
          nemo perspiciatis a laudantium?
        </p>

        {/* Desktop View Only */}
        <div className="lg:block hidden w-full overflow-hidden">
          <div className="grid grid-cols-3 mx-10 gap-10 projectsAnim1">
            {[...Array(3)].map((_, idx) => (
              <div key={idx} className="card bg-gray-100 rounded-3xl p-5">
                <button className="px-6 py-2 bg-gdsc-blue rounded-3xl text-white">
                  Department
                </button>
                <h2 className="font-bold mt-2">2024</h2>
                <h1 className="font-bold text-3xl mt-2">Project Name</h1>
                <p className="text-gray-500 mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                  doloremque deleniti quibusdam?
                </p>
                <button className="w-full bg-gdsc-blue text-white rounded-3xl py-2 mt-5">
                  See More
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProjects;
