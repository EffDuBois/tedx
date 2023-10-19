import React from "react";
import TeamCard from "../cards/TeamCard";

const TeamTray = (props) => {
  return (
    <div>
      <div className="my-10 gap-y-8 gap-x-8 flex flex-col lg:flex-row flex-wrap lg:justify-center items-center m-auto">
        {props.imageArray.map((img, index) => (
            <TeamCard
              key={index}
              src={img.path}
              name={img.name}
              title={img.title}
            />
        ))}
      </div>
    </div>
  );
};

export default TeamTray;
