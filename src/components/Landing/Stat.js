import React from "react";
import CountUp from "react-countup";
function Stat({ styles, title, description, stat }) {
  return (
    <div className={styles}>
      <div className="flex flex-col align-center justify-center h-full  ">
        <div className="sm:text-sm md:text-xl mb-2  ">
          {" "}
          {title}
          <div className="text-xs font-thin">{description}</div>
        </div>
        <div className="sm:text-3xl md:text-7xl font-black font-Josefin">
          <CountUp start={0} end={stat} duration={5} />
        </div>
      </div>
    </div>
  );
}

export default Stat;
