import React from "react";
import imgPrincipal from "../../resources/images/principal/Dr_Ashwath_MU@Principal,_BIT,_Bangalore.jpg";
import imgShivang from "../../resources/images/team/Core/person5@placeholder.jpg";
import teamImages from "../../resources/images/team/getTeamImages.js";
import TeamTray from "../trays/TeamTray";
import PersonCardDesc from "../cards/PersonCardDesc";

const AboutPage = () => {
  return (
    <div className="m-7 lg:m-gutterbig">
      <PersonCardDesc
        name="Dr Ashwath MU"
        heading={
          <h1 className="mt-0">
            Our <br />
            <span className="text-ted">Faculty coordinator</span>
          </h1>
        }
        title="Principal, BIT Bangalore"
        image={imgPrincipal}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum."
      />
      <h1 className="text-center">
        Our <span className="text-ted ">Team</span>
      </h1>
      <PersonCardDesc
        name="Shivang Jha"
        title="Organiser"
        contact="932222222"
        image={imgShivang}
        heading={
          <h2 className="my-3">
            The <span className="text-ted">Organiser</span>
          </h2>
        }
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum."
      />
      {/* <div className="flex flex-col items-center lg:flex-row">
        <PersonCard
          className={`lg:h-[40vw] lg:w-[40vw]`}
          name="Dr Ashwath MU"
          title="Principal, BIT Bangalore"
          src={imgPrincipal}
        />
        <div className="ml-[2vw]">
          
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div> */}

      <TeamTray imageArray={teamImages} firstText="design team" />
    </div>
  );
};

export default AboutPage;
