import React from "react";
import imgPrincipal from "../../resources/images/principal/Dr_Ashwath_MU@Principal,_BIT,_Bangalore.jpg";
import imgShivang from "../../resources/images/team/Core/person5@placeholder.jpg";
import teamImages from "../../resources/images/team/getTeamImages.js";
import TeamTray from "../trays/TeamTray";
import PersonCardDesc from "../cards/PersonCardDesc";

const AboutPage = () => {
  return (
    <div className="m-gutter lg:m-gutterbig">
      <div className="mb-36">
        <PersonCardDesc
          name="Dr Ashwath MU"
          heading={
            <h2 className="mt-0 mb-3">
              Our <br />
              <span className="text-ted">
                Faculty <span className="max-md:text-4xls">coordinator</span>
              </span>
            </h2>
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
      </div>

      <h1 className="text-left lg:text-8xl">
        Our <span className="text-ted ">Team</span>
      </h1>
      <PersonCardDesc
        name="Shivang Jha"
        title="Organiser"
        contact="932222222"
        image={imgShivang}
        heading={
          <h2 className=" mb-3">
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
      <h2 className="mt-6 text-center">Design Team</h2>
      <TeamTray className imageArray={teamImages} />
    </div>
  );
};

export default AboutPage;
