import React from "react";
import PersonCard from "./PersonCardFolding";

const PersonCardDesc = (props) => {
  return (
    <div className={`flex flex-col items-center lg:items-start lg:flex-row my-16`}>
      <PersonCard
        className={`lg:h-[41vw] lg:w-[43vw] mb-4 lg:m-0`}
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