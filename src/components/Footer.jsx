import React from "react";

const Footer = () => {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto py-10 flex gap-32">
        <div className="basis-1/2">
          <h1 className="text-[12rem] font-semibold leading-none tracking-tight">
            refokus.
          </h1>
        </div>
        <div className="basis-1/2 flex gap-4">
          <div className="basis-1/3">
            <h4 className="mb-10 text-zinc-600">Socials</h4>
            {["Instagram", "Twitter (x?)", "LinkedIn"].map((item, index) => (
              <a key={index} className="block mt-3 text-zinc-600">{item}</a>
            ))}
          </div>
          <div className="basis-1/3">
            <h4 className="mb-10 text-zinc-600">Sitemap</h4>
            {["Home", "Work", "Careers", "Contact"].map((item, index) => (
              <a key={index} className="block mt-3 text-zinc-200">{item}</a>
            ))}
          </div>
          <div className="basis-1/2 flex flex-col items-end">
            <p className="text-right">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo, totam?
            </p>
            <img
              className="w-32 mt-10"
              src="https://assets-global.website-files.com/5df3de8e749203dc3167a479/65369e818884afbae46a35fc_Webflow-badge.svg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto flex gap-10 pb-15">
        {["Privacy Policy", "Cookie Policy", "Impressum", "Terms"].map(
          (item, index) => (
            <span key={index} className="inline-block text-zinc-600">{item}</span>
          )
        )}
      </div>
    </div>
  );
};

export default Footer;
