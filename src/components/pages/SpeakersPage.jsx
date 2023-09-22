import React from "react";
import PersonCard from "../Cards/PersonCard";

const SpeakersPage = () => {
  return (
    <div>
      <h1>
        Our <span className="text-white glow">Speakers</span>
      </h1>
      <div className="m-20 grid grid-cols-3 gap-x-10 gap-y-20 place-content-center">
        <PersonCard />
        <PersonCard />
        <PersonCard />
        <PersonCard />
        <PersonCard />
        <PersonCard />
        <PersonCard />
        <PersonCard />
        <PersonCard />
      </div>
    </div>
  );
};

export default SpeakersPage;
