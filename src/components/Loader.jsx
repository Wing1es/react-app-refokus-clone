import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Loader = () => {
  const loaderRef = useRef(null);
  const dotRef = useRef(null);
  useEffect(() => {
    setTimeout(() => {
      gsap.to(loaderRef.current, {
        yPercent: -100,
        duration: 1,
        ease: "power2.inOut",
      });
    }, 2000);
    setTimeout(() => {
      gsap.set(dotRef.current, {
        backgroundColor: "#00FF19",
        boxShadow: "0 0 0.4em #00FF19",
      });
    }, 1000);
  }, []);
  return (
    <div
      ref={loaderRef}
      className="loader-wrapper z-1 fixed top-0 left-0 w-full h-screen bg-zinc-900 flex items-center justify-center"
    >
      <div className="w-full h-screen flex items-center justify-center">
        <div className="w-[70%] h-[70%] border-y-1 flex justify-center items-center">
          <h1 className="text-[9rem] flex items-start">
            work.
            <span
              style={{ boxShadow: "0 0 0 #00FF19" }}
              ref={dotRef}
              className="w-4 h-4 rounded-full inline-block bg-zinc-700"
            ></span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Loader;
