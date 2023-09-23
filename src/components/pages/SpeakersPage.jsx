import React from "react";
import PersonCard from "../Cards/PersonCard";
import Speaker1 from "../../resources/speakers/Abdul_Bari.jpg";
var listOfImages = [];

const SpeakersPage = () => {

  return (
    <div className="m-20">
      <h1>
        Our <span className="text-white glow">Speakers</span>
      </h1>
      <div className="my-20 flex justify-between flex-wrap">
        <PersonCard img={Speaker1} name="Abdul Bari" title="Education Content Creator"/>
      </div>
    </div>
  );
};

export default SpeakersPage;
