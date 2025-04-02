import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";
import arqitel from "../assets/arqitel.mp4";
import ttr from "../assets/ttr.mp4";
import yir from "../assets/yir.mp4";
import yahoo from "../assets/yahoo.mp4";
import rainfall from "../assets/rainfall.mp4";

const Products = () => {
  const products = [
    {
      title: "Arqitel",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet veritatis sequi est adipisci alias ab sunt ad.",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      description:
        "Lorem ipsum Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur dolor sit amet consectetur adipisicing elit. Eveniet veritatis sequi est adipisci alias ab sunt ad dolor sit amet consectetur adipisicing elit. Eveniet veritatis sequi.",
      live: true,
      case: false,
    },
    {
      title: "YIR 2022",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet veritatis sequi est adipisci alias ab sunt ad.",
      live: true,
      case: true,
    },
    {
      title: "Yahoo!",
      description:
        "Lorem dolor sit amet consectetur adipisicing elit. Eveniet veritatis sequi ipsum dolor sit amet consectetur adipisicing elit. Eveniet veritatis sequi est adipisci alias ab sunt ad.",
      live: true,
      case: true,
    },
    {
      title: "Rainfall",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consectetur Eveniet veritatis sequi est adipisci alias ab sunt ad.",
      live: true,
      case: false,
    },
  ];

  const [pos, setPos] = useState(0);

  const mover = (val) => {
    setPos(val * 23);
  };

  const color = [
    "hover:bg-[#080262]",
    "hover:bg-[#2F2377]",
    "hover:bg-[#7A4FF8]",
    "hover:bg-[#0C0012]",
    "hover:bg-[#2E332F]",
  ];

  return (
    <div className="mt-32 relative">
      {products.map((elem, index) => (
        <Product
          key={index}
          index={index}
          move={mover}
          color={color[index]}
          val={elem}
        />
      ))}
      <div className="absolute top-0 pointer-events-none w-full h-full">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
          className="window absolute w-[32rem] h-[23rem] left-[44%] rounded-3xl overflow-hidden"
        >
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full"
          >
            <video
              className="absolute object-cover rounded-3xl"
              autoPlay
              muted
              loop
              src={arqitel}
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full"
          >
            <video
              className="absolute object-cover rounded-3xl"
              autoPlay
              muted
              loop
              src={ttr}
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full"
          >
            <video
              className="absolute object-cover rounded-3xl"
              autoPlay
              muted
              loop
              src={yir}
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full"
          >
            <video
              className="absolute object-cover rounded-3xl"
              autoPlay
              muted
              loop
              src={yahoo}
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full"
          >
            <video
              className="absolute object-cover rounded-3xl"
              autoPlay
              muted
              loop
              src={rainfall}
            ></video>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
