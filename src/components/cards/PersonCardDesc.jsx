import React from "react";
import PersonCard from "./PersonCardFolding";
import TeamTray from "../trays/TeamTray";

const PersonCardDesc = (props) => {
  return (
    <div className="lg:my-16 ">
      <div
        className={`flex lg:overflow-hidden flex-col lg:flex-row items-center lg:items-stretch lg:items-start my-8 lg:my-0`}
      >
        <PersonCard
          className={`lg:h-[38vw] lg:w-[30vw] w-[90vw] h-[85vw] `}
          name={props.name}
          title={props.title}
          contact={props.contact}
          src={props.image}
        />
        <p className="[font-stretch: normal] font-light normal-case text-left lg:bg-ted lg:pl-6 lg:p-4 lg:text-1.5xl lg:tracking-tight text-slate-200">
          <h2 className="mt-0 font-black">{props.heading}</h2>
          {props.description}
        </p>
      </div>
      {props.teamImages ? <TeamTray imageArray={props.teamImages} /> : null}
    </div>
  );
};

export default PersonCardDesc;
