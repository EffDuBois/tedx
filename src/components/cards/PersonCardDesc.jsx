import React from "react";
import PersonCard from "./PersonCardFolding";

const PersonCardDesc = (props) => {
  return (
    <div
      className={`flex lg:block lg:overflow-hidden flex-col items-center lg:items-start lg:flex-row my-8 lg:my-16`}
    >
      <PersonCard
        className={`lg:h-[40vw] lg:w-[34vw] lg:float-left mb-4 lg:mb-4 lg:mr-6 w-[90vw] h-[85vw] `}
        name={props.name}
        title={props.title}
        contact={props.contact}
        src={props.image}
      />
      <p>
        <h2 className="text-main mt-0 bg-ted h-full">{props.heading}</h2>
        {props.description}
      </p>
    </div>
  );
};

export default PersonCardDesc;
