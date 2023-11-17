import React from "react";

import imgPrincipal from "../../resources/images/team/core/principal.webp";
import imgOrganiser from "../../resources/images/team/core/Shivang_Jha@Organiser.webp";
import imgMarketing from "../../resources/images/team/core/Ashutosh_Tandon@Head_Of_Marketing.webp";
import imgContent from "../../resources/images/team/core/Nikita_Tenjerla@Head_Of_Content.webp";
import imgDesign from "../../resources/images/team/core/Ashish_A_Ankam@Head_Of_Design_and_Technical_Team.webp";
import imgCuration from "../../resources/images/team/core/Siri_Prakash@Head_Of_Curation.webp";
import imgCreative from "../../resources/images/team/core/Harini_Giridhar@Head_Of_Creative.webp";

import designTeamImages from "../../resources/images/team/design/getImages";
import contentTeamImages from "../../resources/images/team/content/getImages";
import creativeTeamImages from "../../resources/images/team/creative/getImages";
import marketingTeamImages from "../../resources/images/team/marketing/getImages";

import PersonCardDesc from "../cards/PersonCardDesc";
import { Link } from "react-router-dom";

const TeamPage = () => {
  return (
    <div className="m-gutter lg:m-gutterbig">
      <div className="mb-36">
        <PersonCardDesc
          name="Dr Ashwath MU"
          heading={
            <h2 className="mt-0 mb-3">
              Our <br />
              <span className="text-ted lg:text-invert">
                Faculty <span className="">coordinator</span>
              </span>
            </h2>
          }
          title="Principal, BIT Bangalore"
          image={imgPrincipal}
          description="Dr. Aswath M U is an esteemed academician and a dedicated professional who oversees our club, TEDxBITBangalore, in his role as the faculty coordinator. With a passion for education and a commitment to nurturing students' talents, Dr. Ashwath plays a pivotal role in the success and growth of our club. As a principal, Dr. Ashwath possesses exceptional leadership qualities, known for his ability to inspire and motivate students to achieve their full potential. Under his guidance, the club has flourished, providing a platform for students to become the best versions of themselves and for various speakers to share ideas and innovations. With his profound knowledge, exceptional leadership skills, and unwavering support, he continues to inspire and guide students, leaving a lasting positive impact on their journeys."
        />
      </div>
      <h1 className="text-left lg:text-8xl">
        Our <span className="text-ted ">Team</span>
      </h1>
      <PersonCardDesc
        name="Shivang Jha"
        title="Organiser"
        contact="+91 83105 18196"
        image={imgOrganiser}
        heading={
          <h2 className=" mb-3">
            The <span className="text-ted lg:text-invert">Organiser</span>
          </h2>
        }
        description="The creative architect behind our transformative gatherings. The driving force that is responsible for capturing the spirit of TED in the event by sparking community connections and inspiring ideas that change perspectives. He is the guiding hand, uniting impassioned individuals to create a powerful, unforgettable event. In essence, he is the catalyst for innovation and positive change."
      />
      <PersonCardDesc
        name="Ashutosh Tandon"
        title="Marketing head"
        contact="+91 93363 70940"
        image={imgMarketing}
        heading={
          <h2 className=" mb-3">
            Head of <span className="text-ted lg:text-invert">Marketing</span>
          </h2>
        }
        description="The marketing team plays a pivotal role in expanding the reach of our creations to a wider audience. Under the leadership of the head , they function as an attractive force, much like a beautiful flower that draws in a friendly crowd with its appealing nectar. Through their carefully crafted campaigns, they skillfully orchestrate engagement, directing our audience to the most compelling aspects of our event. Acting as a persuasive link between our visions and the outside world, they infuse our creations with energy and enthusiasm, making them engaging and impactful."
        teamImages={marketingTeamImages}
      />
      <PersonCardDesc
        name="Nikita Tenjarla"
        title="Content Head"
        contact="+91 84969 22977"
        image={imgContent}
        heading={
          <h2 className=" mb-3">
            Head of <span className="text-ted lg:text-invert">Content</span>
          </h2>
        }
        description={`Under the adept leadership of the Content Head, the TEDx BIT Bangalore Content Team is a dedicated group crafting compelling content for TEDx events. They create thought-provoking material, pen insightful articles for the "TEDlet" newsletter, and contribute to TEDx magazines. Their skills also include crafting engaging snippets for ads and supporting marketing pitches, all in the spirit of collaboration and organization, contributing to TEDx BIT Bangalore's impactful experiences.
    `}
        teamImages={contentTeamImages}
      />
      <PersonCardDesc
        name="Ashish A Ankam"
        title="Design Head"
        contact="+91 63617 15169"
        image={imgDesign}
        heading={
          <h2 className=" mb-3">
            Head of{" "}
            <span className="text-ted lg:text-invert">
              Design and Technical
            </span>
          </h2>
        }
        description={`A team of prolifics, who breathe life into conceptualisations, musings and visions. This cadre of designers crafts the entirety of the social media sites, posters, and event backdrops. Guiding this team with fervor, artistry and ingenuity is the head. In harmonious conjunction with the sub-head, the team strives to immortalize ideas.They bear the responsibility of fashioning a one-of-a-kind atmosphere, a unique touch woven into every detail of the event materials and the very essence of the venue.
        `}
        teamImages={designTeamImages}
      />
      <PersonCardDesc
        name="Siri Prakash"
        title="Curation Head"
        contact="+91 93363 70940"
        image={imgCuration}
        heading={
          <h2 className=" mb-3">
            Head of <span className="text-ted lg:text-invert">Curation</span>
          </h2>
        }
        description={`The visionary force behind our extraordinary events. Their mission? To seek, select, and cultivate the most compelling ideas, bringing them to our stage to inspire and transform the world, headed by a resilient and visionary head who holds pivotal role in shaping the essence and impact of our event. These dedicated individuals are the gatekeepers of innovation, tirelessly working to curate a line-up that reflects the very essence of "Ideas Worth Spreading.”
  `}
      />
      <PersonCardDesc
        name="Harini Giridhar"
        title="Creative Head"
        contact="+91 74068 98300"
        image={imgCreative}
        heading={
          <h2 className=" mb-3">
            Head of <span className="text-ted lg:text-invert">Creative </span>
          </h2>
        }
        description={`As the wellspring that gives birth to the river, they are the headwaters to our event's flow. With the skill of painters, they create intricate brushstrokes on a blank canvas. They are the idea architects, problem solvers, and pioneers who stretch the boundaries of what can be achieved.
        Dedicated to their craft, they invest tireless effort in research, innovative idea exploration, concept development, prototyping, refinement, and the invaluable feedback loop. It is the magic of our creative team that gives each event its distinct pulse, weaving together the threads of imagination to create moments that linger in the memory, inspiring and illuminating.`}
        teamImages={creativeTeamImages}
      />{" "}
      <Link className="text-3xl my-20" to="/">
        Event -{`>`}
      </Link>
    </div>
  );
};

export default TeamPage;
