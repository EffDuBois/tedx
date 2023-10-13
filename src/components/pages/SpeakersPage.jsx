import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

import PeopleTray from "../Trays/PeopleTray";

import speakerImages from "../../resources/speakers/getSpeakerImages.js";

const SpeakersPage = () => {
  return (
    <div className="m-20">
      <h1>
        Our <span className="text-white glow">Speakers</span>
      </h1>
      <PeopleTray imageArray={speakerImages} />
      <div className="flex flex-col md:flex-row w-full justify-evenly">
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
    </div>
  );
};

export default SpeakersPage;
