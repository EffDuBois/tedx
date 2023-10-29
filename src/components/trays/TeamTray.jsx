import React from "react";
import TeamCard from "../cards/TeamCard";

const TeamTray = (props) => {
  return (
    <div>
      <div className="grid lg:grid-cols-5 grid-cols-2 place-content-center m-auto">
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
