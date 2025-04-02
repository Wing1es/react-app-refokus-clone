import React from "react";
import LocomotiveScroll from 'locomotive-scroll';
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import Work from "./components/Work";
import Stripes from "./components/Stripes";
import Products from "./components/Products";
import Marquees from "./components/Marquees";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-full min-h-screen bg-zinc-900 font-["satoshi"] text-white'>
      {/* <Loader/> */}
      <Navbar />
      <Work/>
      <Stripes/>
      <Products/>
      <Marquees/>
      <Cards/>
      <Footer/>
    </div>
  );
};

export default App;
