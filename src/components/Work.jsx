import React, { useState } from "react";
import { useScroll } from "motion/react"

const Work = () => {

  const [images,setImage] = useState([
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
      top: "50%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
      top: "56%",
      left: "44%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
      top: "45%",
      left: "56%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",
      top: "60%",
      left: "53%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",
      top: "43%",
      left: "40%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",
      top: "65%",
      left: "55%",
      isActive: false,
    },
  ])

  const { scrollYProgress } = useScroll()

  scrollYProgress.on("change",(latest)=>{
    function imagesShow(arr){
      setImage((prev) => 
        prev.map((item, index) => ({
          ...item,
          isActive: arr.includes(index),
        }))
      );
    }

    switch (Math.floor(latest*700)){
      case 0:
        imagesShow([])
        break
      case 10:
        imagesShow([0])
        break
      case 20:
        imagesShow([0,1])
        break
      case 30: 
        imagesShow([0,1,2])
        break
      case 40:
        imagesShow([0,1,2,3])
        break
      case 50:
        imagesShow([0,1,2,3,4])
        break
      case 60:
        imagesShow([0,1,2,3,4,5])
        break
    }
  })

  return (
    <div className="w-full mt-20">
      <div className="relative max-w-screen-xl mx-auto text-center">
        <h1 className="text-[31vw] leading-none font-medium tracking-tight select-none">
          work
        </h1>
        <div className="absolute top-0 w-full h-full">
          {images.map(
            (image, index) =>
              image.isActive && (
                <img
                  className="absolute w-60 rounded-lg -translate-x-[50%] -translate-y-[50%]"
                  style={{ top: image.top, left: image.left }}
                  src={image.url}
                  alt=""
                />
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Work;
