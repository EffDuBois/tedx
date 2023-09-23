import React from "react";
import PersonCard from "../Cards/PersonCard";
import speakerImages from "../../resources/speakers/getSpeakerImages";

const SpeakersPage = () => {
  return (
    <div className="m-20">
      <h1>
        Our <span className="text-white glow">Speakers</span>
      </h1>
      <div className="my-20 flex justify-between flex-wrap">
        {speakerImages.map((img, index) => (
          <PersonCard key={index} src={img.path} name={img.name} title={img.title}/>
        ))}
      </div>
    </div>
  );
};

export default SpeakersPage;
