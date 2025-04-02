import React, { useState } from "react";
import Button from "./Button";

const Product = ({ val, move, index, color }) => {
  
  return (
    <div
      onMouseEnter={() =>{
        move(index)
      }}
      className={`group w-full py-20 ${color} h-[23rem] text-white transition-all duration-300 ease-in-out rounded-2xl`}
    >
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        <h1 className="text-6xl font-medium">{val.title}</h1>
        <div className="details w-1/3">
          <p className="mb-10">{val.description}</p>
          <div className="flex items-center gap-5 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
            {val.live && (
              <Button
                name="Live Website"
              />
            )}
            {val.case && <Button name="Case Study" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
