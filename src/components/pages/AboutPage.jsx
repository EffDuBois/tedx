import React from "react";
import imgPrincipal from "../../resources/Principal/Dr_Ashwath_MU@Principal,_Bangalore_Institute_of_Technology.jpg";
import teamImages from "../../resources/Team/getTeamImages";
import PersonCard from "../Cards/PersonCard";
import PeopleTray from "../Trays/PeopleTray";

const AboutPage = () => {
  return (
    <div className="m-20">
      <h1>
        Our <span className="text-white glow">Faculty coordinator</span>
      </h1>
      <PersonCard
        name="Dr Ashwath MU"
        title="Principal, BIT Bangalore"
        src={imgPrincipal}
      />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <h1>
        Our <span className="text-white glow">Team</span>
      </h1>
      <PeopleTray imageArray={teamImages} />
    </div>
  );
};

export default AboutPage;
