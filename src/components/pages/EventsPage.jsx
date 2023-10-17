import React from "react";
import logo from "../../resources/images/logos/insightx/logo-Insightx_nobg.png";
import Counter from "../counters/Counter";
import sponsorImages from "../../resources/images/sponsors/getSponsorImages";
const EventsPage = () => {
  return (
    <div >
      <div className="lg:h-[75vh] h-[10vh] mt-[8vh] items-center flex">
        <img className="" src={logo} alt="Theme Video" />
      </div>
      <div className="mx-gutter lg:mx-gutterbig">
        <div className="justify-center flex">
          <a
            href={
              "https://docs.google.com/forms/d/1woMBHckOJqNbIuXqa2UiJD4Q_6M5EKs0cGco6IJm-fM/edit"
            }
            rel="noreferrer"
            target="_blank"
            className="lg:m-5 lg:text-2xl "
          >
            <u>BUY TICKETS NOW!</u>
          </a>
        </div>
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-[5vw] lg:my-12">
          <div className="lg:order-1 text-center lg:text-left">
            <h1 className="lg:text-left my-0 ">
              <span className="text-ted">
                <br />
                INSIGHTX
              </span>
            </h1>
            in
            <Counter />
          </div>
          <p className="mt-4 lg:m-0">
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
          <h2 className="text-center lg:text-5xl text-3xls">
            Find us <span className="text-ted lg:text-7xl text-xls">At</span>
          </h2>
          <p className="text-center"> Bangalore Institute of Technology,</p>
          <p className="text-center">KR Road, VV Puram, Bangalore - 560094</p>
        </div>
        <div className=" mt-32 mb-16">
          <h1>
            Our <span className="text-ted ">Sponsors</span>
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
