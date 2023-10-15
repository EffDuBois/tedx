import React from "react";
import PersonCard from "../Cards/PersonCard";

const PeopleTray = (props) => {
  return (
    <div className="my-20 flex justify-evenly flex-wrap">
      {props.imageArray.map((img, index) => (
        <PersonCard
          key={index}
          src={img.path}
          name={img.name}
          title={img.title}
        />
      ))}
    </div>
  );
};

export default PeopleTray;
