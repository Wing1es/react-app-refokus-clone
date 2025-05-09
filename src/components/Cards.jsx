import React from "react";
import Card from "./Card";

const Cards = () => {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto py-20 flex gap-2">
        <Card
          width={"basis-1/3"}
          start={false}
          para={true}
          top="Up Next: Culture"
          mid="Who we are"
        />
        <Card
          width={"basis-2/3"}
          start={true}
          para={false}
          top="Get In Touch"
          mid="Let's get to it, <br>together."
          hover={"hover:bg-violet-600"}
        />
      </div>
    </div>
  );
};

export default Cards;
