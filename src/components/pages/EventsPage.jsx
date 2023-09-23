import React from "react";
import logo from "../../resources/logo-Insightx-crop.jpg";
import Counter from "../Counters/Counter";
import sponsorImages from "../../resources/Sponsors/getSponsorImages";
const EventsPage = () => {
  return (
    <div className="w-full">
      <div className="h-[80vh] items-center flex bg-black">
        <img className="w-3/4 m-auto" src={logo} alt="Theme Video" />
      </div>
      <div className="m-20 w-[60vw] h-32 mx-auto justify-center flex">
        <button className="glow-button  w-3/5 h-20">
          <span className="m-5 text-xl">BUY TICKETS NOW!</span>
        </button>
      </div>
      <div className="w-3/4 m-auto mt-32 mb-16">
        <h1>
          About <span className="text-white glow">INSIGHTX</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="bg-black h-52 flex justify-center item-center flex flex-col">
        <Counter />
        <p className="self-center">Location</p>
      </div>
      <div className="w-3/4 m-auto mt-32 mb-16">
        <h1>
          Our <span className="text-white glow ">Sponsors</span>
        </h1>
        <div className="grid grid-cols-3 gap-x-10 gap-y-20 place-content-center">
          {sponsorImages.map((img, index)=>{
            return(
              <img key={index} src={img.path} alt={img.name}/>
            )
          })}
          
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
