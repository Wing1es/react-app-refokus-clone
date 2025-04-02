import { motion } from "motion/react";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const Card = ({ width, start, para, top, mid, hover = "none" }) => {
  return (
    <motion.div
    whileHover={{padding:"25px"}}
      className={`bg-zinc-800 p-5 rounded-xl ${hover} ${width} min-h-[28rem] flex flex-col justify-between trasition-all ease-in-out`}
    >
      <div className="w-full">
        <div className="w-full flex justify-between items-center">
          <h3>{top}</h3>
          <IoIosArrowRoundForward />
        </div>
        <h1
          className="text-3xl font-medium mt-5"
          dangerouslySetInnerHTML={{ __html: mid }}
        ></h1>
      </div>
      <div className="down w-full">
        {start && (
          <>
            <h1 className="text-8xl font-semibold tracking-tight leading-none">
              Start a Project
            </h1>
            <button className="rounded-full mt-5 py-2 px-5 border-[1px] border-zinc-50">
              Contact Us
            </button>
          </>
        )}
        {para && (
          <p className="text-sm text-zinc-500 font-medium">
            Lorem ipsum, dolor sit amet consectetur adipisicing.
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
