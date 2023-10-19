import React from "react";
import imgPrincipal from "../../resources/images/principal/Dr_Ashwath_MU@Principal,_BIT,_Bangalore.jpg";
import designTeamImages from "../../resources/images/team/design/getDesignTeamImages";
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
          description=""
        />
      </div>

      <h1 className="text-left lg:text-8xl">
        Our <span className="text-ted ">Team</span>
      </h1>
      <PersonCardDesc
        name="Shivang Jha"
        title="Organiser"
        contact="+91 83105 18196"
        image={""}
        heading={
          <h2 className=" mb-3">
            The <span className="text-ted">Organiser</span>
          </h2>
        }
        description="The creative architect behind our transformative gatherings. The driving force that is responsible for capturing the spirit of TED in the event by sparking community connections and inspiring ideas that change perspectives. He is the guiding hand, uniting impassioned individuals to create a powerful, unforgettable event. In essence, he is the catalyst for innovation and positive change."
      />

      <PersonCardDesc
        name="Ashutosh Tandon"
        title="Marketing head"
        contact="+91 93363 70940"
        image={""}
        heading={
          <h2 className=" mb-3">
            Head of <span className="text-ted">Marketing</span>
          </h2>
        }
        description="The marketing team plays a pivotal role in expanding the reach of our creations to a wider audience. Under the leadership of the head , they function as an attractive force, much like a beautiful flower that draws in a friendly crowd with its appealing nectar. Through their carefully crafted campaigns, they skillfully orchestrate engagement, directing our audience to the most compelling aspects of our event. Acting as a persuasive link between our visions and the outside world, they infuse our creations with energy and enthusiasm, making them engaging and impactful."
      />

      <PersonCardDesc
        name="Nikita Tenjarla"
        title="Content Head"
        contact="+91 84969 22977"
        image={""}
        heading={
          <h2 className=" mb-3">
            Head of <span className="text-ted">Content</span>
          </h2>
        }
        description={`The TEDx BIT Bangalore Content Team, under the adept leadership of the Content Head, is a dynamic and dedicated group responsible for curating and crafting the compelling content that forms the backbone of our TEDx events. With an unwavering commitment to excellence, the Content Head leads the team and helps guide their creative endeavors. Together, they create thought-provoking material for the main event, pen insightful articles for the iconic "TEDlet" newsletter, and contribute engaging content to TEDx magazines. Additionally, their skills extend to writing captivating snippets for advertisements and supporting marketing team pitches. Collaborative, organized, and driven by teamwork, this group plays a pivotal role in delivering TEDx BIT Bangalore's impactful and inspiring experiences.
    `}
      />
      <PersonCardDesc
        name="Ashish A Ankam"
        title="Design Head"
        contact="+91 63617 15169"
        image={""}
        heading={
          <h2 className=" mb-3">
            Head of <span className="text-ted">Design and Technical</span>
          </h2>
        }
        description={`A team of prolifics, who breathe life into conceptualisations, musings and visions. This cadre of designers crafts the entirety of the social media sites, posters, and event backdrops. Guiding this team with fervor, artistry and ingenuity is the head. In harmonious conjunction with the sub-head, the team strives to immortalize ideas.They bear the responsibility of fashioning a one-of-a-kind atmosphere, a unique touch woven into every detail of the event materials and the very essence of the venue.
        `}
      />
      <PersonCardDesc
        name="Siri Prakash"
        title="Curation Head"
        contact="+91 93363 70940"
        image={""}
        heading={
          <h2 className=" mb-3">
            Head of <span className="text-ted">Curation</span>
          </h2>
        }
        description={`The visionary force behind our extraordinary events. Their mission? To seek, select, and cultivate the most compelling ideas, bringing them to our stage to inspire and transform the world, headed by a resilient and visionary head who holds pivotal role in shaping the essence and impact of our event. These dedicated individuals are the gatekeepers of innovation, tirelessly working to curate a line-up that reflects the very essence of "Ideas Worth Spreading.”
  `}
      />
      <PersonCardDesc
        name="Harini Giridhar"
        title="Creative Head"
        contact="+91 74068 98300"
        image={""}
        heading={
          <h2 className=" mb-3">
            Head of <span className="text-ted">Creative </span>
          </h2>
        }
        description={`As the wellspring that gives birth to the river, they are the headwaters to our event's flow. With the skill of painters, they create intricate brushstrokes on a blank canvas. They are the idea architects, problem solvers, and pioneers who stretch the boundaries of what can be achieved.
        Dedicated to their craft, they invest tireless effort in research, innovative idea exploration, concept development, prototyping, refinement, and the invaluable feedback loop. It is the magic of our creative team that gives each event its distinct pulse, weaving together the threads of imagination to create moments that linger in the memory, inspiring and illuminating.`}
      />

      <h2 className="mt-6 text-center">Design Team</h2>
      <TeamTray className imageArray={designTeamImages} />
    </div>
  );
};

export default AboutPage;
