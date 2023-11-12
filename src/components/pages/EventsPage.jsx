import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

import PeopleTray from "../trays/PeopleTray";
import Counter from "../counters/Counter";

import logo from "../../resources/images/logos/insightx/logo-insightx-nobg.webp";

import sponsorImages from "../../resources/images/sponsors/getSponsorImages";
import speakerImages from "../../resources/images/speakers/getSpeakerImages";
import { Link } from "react-router-dom";

const EventsPage = () => {
  return (
    <div>
      {/* <div className="lg:h-[75vh] h-[10vh] mt-[8vh] items-center flex">
        <img className="w-[95vw]" src={logo} alt="Theme Video" />
      </div> */}
      <div className=" flex flex-col">
        <div className=" h-[80vh] lg:h-[75vh] items-center mx-32 flex lg:mb-14">
          <img className="" src={logo} alt="insightx-logo" width={1500} height={182}/>
          {/* <video src={video} width={1500} height={1000}/> */}
        </div>
        <div className="justify-center flex">
          <Link to={"/register"}>
          <u>Get Your Early Bird Tickets!</u>
          </Link>
          {/* <a
            href={
              "https://docs.google.com/forms/d/1woMBHckOJqNbIuXqa2UiJD4Q_6M5EKs0cGco6IJm-fM/edit"
            }
            rel="noreferrer"
            target="_blank"
            className="lg:m-5 lg:text-2xl "
          >
            <u>BUY TICKETS NOW!</u>
          </a> */}
        </div>
      </div>
      <div className="mx-gutter lg:mx-gutterbig my-12">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-[5vw] lg:my-12 lg:items-center">
          <div className="lg:order-1 lg:pb-20">
            <h1 className="text-left my-0 lg:text-8xl leading-1">
              <span className="text-ted">INSIGHTX</span>
            </h1>
            in
            <Counter />
          </div>
          <p className="mt-4 lg:m-0">
            Within the tapestry of InsightX, the mundane fades into the
            backdrop, and the extraordinary takes center stage. InsightX takes
            the role of a lighthouse that shines light on the darkness covering
            ‘that’ hidden in plain sight. At its core, InsightX celebrates the
            pursuit of wisdom and the art of understanding. It nurtures the
            growth of a third eye, a metaphorical lens that grants individuals
            the ability to perceive the world with newfound clarity, see beyond
            the limits of the known and explore the unnoticed dimensions of
            knowledge and understanding.
          </p>
        </div>
        <div className="h-52 flex justify-center item-center flex flex-col">
          <h2 className="text-center lg:text-5xl text-3xls">
            Find us <span className="text-ted">At</span>
          </h2>
          <p className="text-center"> Bangalore Institute of Technology,</p>
          <p className="text-center">KR Road, VV Puram, Bangalore - 560094</p>
        </div>

        {/* Speakers */}
        <PeopleTray imageArray={speakerImages} firstText="" secondText="">
          <h1 className="text-center text-ted">
            <span className="text-4xls lg:text-4xl text-main">The</span>
            <br /> Speakers
          </h1>
        </PeopleTray>
        <div className="flex flex-col lg:flex-row w-full justify-evenly">
          <div className="flex flex-col content-center item-center m-3">
            <FontAwesomeIcon
              icon={faClock}
              size="2xl"
              style={{ color: "#ff1414" }}
            />
            <p className="font-bold text-center">Date and Time</p>
            <p className="text-center"> November 25, 2023</p>
            <p className="text-center">Time</p>
          </div>
          <div className="flex flex-col content-center item-center mt-4">
            <FontAwesomeIcon
              icon={faLocationDot}
              size="2xl"
              style={{ color: "#ff1414" }}
            />
            <p className="font-bold text-center">Venue</p>
            <p className="text-center"> Bangalore Institute of Technology,</p>
            <p className="text-center">KR Road, VV Puram, Bangalore - 560094</p>
          </div>
        </div>

        <div className=" my-10">
          <h1>
            Our <span className="text-ted ">Sponsors</span>
          </h1>
          <div className="grid grid-cols-2 gap-x-10 gap-y-20 place-content-center">
            {sponsorImages.map((img, index) => {
              return <img width={300} height={300} key={index} src={img.path} alt={img.name} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
