import React, { useEffect, useRef } from "react";
import Button from "./Button";
import gsap from "gsap";

const Navbar = () => {
  const light = useRef(null);
  useEffect(() => {
    setTimeout(() => {
      gsap.set(light.current, {
        boxShadow: "0 0 0.45em #00FF19",
        backgroundColor: "#00FF19",
      });
    }, 3500);
  });
  return (
    <div className="max-w-screen-xl mx-auto py-6 flex justify-between items-center border-b-[1px] border-zinc-700">
      <div className="navleft flex items-center">
        <img
          src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
          alt=""
        />
        <div className="links flex gap-15 ml-20">
          {["Home", "Work", "Culture", "", "News"].map((elem, index) =>
            elem.length === 0 ? (
              <span key={index} className="w-[2px] h-6 bg-zinc-700"></span>
            ) : (
              <a key={index} href="#" className="text-sm flex items-center gap-1">
                {index == 1 && (
                  <span
                    ref={light}
                    style={{ boxShadow: "0 0 0em #00FF19" }}
                    className="inline-block w-1.5 h-1.5 rounded-full bg-zinc-500"
                  ></span>
                )}
                {elem}
              </a>
            )
          )}
        </div>
      </div>
      <Button />
    </div>
  );
};

export default Navbar;
