import React from "react";
import Reviews from '../Components/Reviews';
import Strategy from '../Components/Strategy';
import Feature from '../Components/Features';
const Home = () => {
  return (
    <div id="home" className="h-full w-full flex flex-col">
      <Strategy />
      <Feature />
      <Reviews />
    </div>
  );
}
export default Home;