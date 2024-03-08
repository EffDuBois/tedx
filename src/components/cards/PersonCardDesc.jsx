import React from "react";
import PersonCardFolding from "./PersonCardFolding";
import TeamTray from "../trays/TeamTray";
//uses PersonCard and adds more description on it. Adds TeamTray to it
const PersonCardDesc = (props) => {
  // //Takes arguments:
  // name=Name of person, 
  // title=designation of person, 
  // contact=phone no/email, 
  // image=imgobject, 
  // heading=title of the card, 
  // description=description of the person, 
  // teamImages=array of images of the team
  return (
    <div className="lg:my-16 ">
      <div
        className={`flex lg:overflow-hidden flex-col lg:flex-row items-center lg:items-stretch lg:items-start my-8 lg:my-0 `}
      >
        <PersonCardFolding
          className={`lg:h-[38vw] lg:w-[30vw] w-[90vw] h-[85vw] ${
            props.hidden ? "hidden" : ""
          }`}
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
