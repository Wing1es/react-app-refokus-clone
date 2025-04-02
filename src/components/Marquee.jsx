import { motion } from "motion/react";
import React from "react";

const Marquee = ({ image }) => {
  return (
    <div className="flex overflow-hidden">
      <motion.div initial={{x:"0"}} animate={{x:"-100%"}} transition={{ease:'linear', duration:13, repeat:Infinity}} className="flex flex-shrink-0 gap-40 py-10 pr-40">
        {image.map((url, index) => (
          <img key={index} src={url} className="w-[6vw] flex-shrink-0" />
        ))}
      </motion.div>
      <motion.div initial={{x:"0"}} animate={{x:"-100%"}} transition={{ease:'linear', duration:13, repeat:Infinity}} className="flex flex-shrink-0 gap-40 py-10 pr-40">
        {image.map((url, index) => (
          <img key={index} src={url} className="w-[6vw] flex-shrink-0" />
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
