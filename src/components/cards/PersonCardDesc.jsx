import React from "react";
import PersonCard from "./PersonCardFolding";

const PersonCardDesc = (props) => {
  return (
    <div className="flex flex-col items-center lg:items-start lg:flex-row">
      <PersonCard
        className={`lg:h-[40vw] lg:w-[40vw]`}
        name={props.name}
        title={props.title}
        contact={props.contact}
        src={props.image}
      />
      <div className="ml-[2vw]">
        <h2 className="text-main mt-0">
          {props.heading}
        </h2>
        <p>
          {props.description}
        </p>
      </div>
    </div>
  );
};

export default PersonCardDesc;