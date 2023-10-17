import React from "react";
import TeamCard from "../cards/TeamCard";

const TeamTray = (props) => {
  return (
    <div>
      <h2 className="text-center">{props.firstText}</h2>
      <div className="my-10 flex flex-wrap justify-between w-[90vw] m-auto">
        {props.imageArray.map((img, index) => (
          <div>
            <TeamCard
              key={index}
              src={img.path}
              name={img.name}
              title={img.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamTray;
