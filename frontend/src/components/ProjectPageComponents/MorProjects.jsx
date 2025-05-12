import React from "react";

function MorProjects({ color, getUpdatedStyles }) {
  return (
    <div
      terid="box-flex"
      className="flex lg:w-[406px] w-[95%] m-auto flex-col gap-[20px] rounded-2xl bg-[#f5f5f5] p-[20px] mt-7"
    >
      <div id="Box1" className="h-[225px] rounded-2xl bg-white"></div>
      <div className="flex items-start">
        <button
          className="rounded-2xl bg-[#ea4335] lg:px-7 lg:py-1  px-4  py-1 font-mono font-semibold text-white"
          style={getUpdatedStyles(color)}
        >
          TLDR
        </button>
      </div>
      <h2 className="font-sans lg:text-[28px] text-[18px] font-bold">
        Lorem ipsum dolor sit amet consectetur.
      </h2>
    </div>
  );
}

export default MorProjects;
