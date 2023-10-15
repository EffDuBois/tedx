import React from "react";
import logo from "../../resources/images/logos/insightx/logo-Insightx_nobg.png";
import Counter from "../counters/Counter";
import sponsorImages from "../../resources/images/sponsors/getSponsorImages";
const EventsPage = () => {
  return (
    <div>
      <div className="h-[75vh] items-center flex">
        <img className="" src={logo} alt="Theme Video" />
      </div>
      <div className="mx-gutter lg:mx-gutterbig">
        <div className="justify-center flex">
          <button className="w-3/5">
            <span className="m-5 text-xl">BUY TICKETS NOW!</span>
          </button>
        </div>
        <div className=" mt-32 mb-16">
          <h1>
            About <span className="text-ted ">INSIGHTX</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="h-52 flex justify-center item-center flex flex-col">
          <Counter />
          <p className="self-center">Location</p>
          <p className="text-center"> Bangalore Institute of Technology,</p>
          <p className="text-center">KR Road, VV Puram, Bangalore - 560094</p>
        </div>
        <div className=" mt-32 mb-16">
          <h1>
            Our <span className="text-ted  ">Sponsors</span>
          </h1>
          <div className="grid grid-cols-3 gap-x-10 gap-y-20 place-content-center">
            {sponsorImages.map((img, index) => {
              return <img key={index} src={img.path} alt={img.name} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
