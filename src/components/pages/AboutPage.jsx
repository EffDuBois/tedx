import React from "react";
import imgPrincipal from "../../resources/images/principal/Dr_Ashwath_MU@Principal,_BIT,_Bangalore.jpg";
import teamImages from "../../resources/images/team/getTeamImages.js";
import PersonCard from "../cards/PersonCardFolding";
import PeopleTray from "../trays/PeopleTray";

const AboutPage = () => {
  return (
    <div className="m-7 lg:m-20">
      <h1>
        Our <span className="text-ted ">Faculty coordinator</span>
      </h1>
      <div className="flex flex-col items-center lg:flex-row">
        <PersonCard
          name="Dr Ashwath MU"
          title="Principal, BIT Bangalore"
          src={imgPrincipal}
        />

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <h1>
        Our <span className="text-ted ">Team</span>
      </h1>
      <PeopleTray imageArray={teamImages} />
    </div>
  );
};

export default AboutPage;
