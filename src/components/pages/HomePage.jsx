import React from "react";

import logobg from "../../resources/images/logos/insightx/logo-Insightx_nobg.png";

const HomePage = () => {
  return (
    <div>
      <div className="border-b-4 border-white flex flex-col">
        <div className="h-[75vh] items-center flex mb-14">
          {/* <img className="h-[75vh] mx-auto mt-16" src={logo} alt="event-logo" /> */}
          <img className="" src={logobg} alt="event-logo" />
        </div>
        {/* <p className="text-center text-normal [font-stretch:normal]">
          Scroll
        </p> */}
        {/* <FontAwesomeIcon
          className="m-2 h-[2rem]"
          icon={faChevronDown}
          style={{ color: "white" }}
        /> */}
      </div>

      <div className="mt-20 mx-gutter lg:mx-gutterbig">
        <div className="flex gap-x-[5vw] justify-start basis-0 my-12">
          <p className="max-w-[45vw]">
            <span className="text-ted">TEDxBITBangalore </span> is a channel to
            propagate ideas globally through a local platform. We hold a{" "}
            <u>university-level license</u> from TED to organise an independent
            <span className="text-ted">
              <sup>x</sup>
            </span>{" "}
            TED event to effectuate the same. It was initiated by a humble group
            of{" "}
            <span className="bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent">
              young visionaries
            </span>{" "}
            dedicated to bringing together, <i>ideas worth spreading</i>. In
            this fifth edition of{" "}
            <span className="text-ted">TEDxBITBangalore </span>, we aspire to
            nurture the ideas that bear the potential to bring about a change in
            the world.
          </p>
          <h1 className="text-left my-0">
            About
            <br />
            <span className="text-ted">
              TEDx
              <br />
              <span className="text-6xl">BITBangalore</span>
            </span>
          </h1>
        </div>
        <div className="flex gap-x-[5vw] basis-0 justify-start mb-32">
          <p className="max-w-[45vw]">
            In the spirit of ideas worth spreading, TED has created a program
            called <span className="text-ted">TEDx</span>.{" "}
            <span className="text-ted">TEDx </span> is a program of local,
            self-organized events that bring people together to share a TED-like
            experience. Our event is called TEDxBitBangalore, where
            <br />
            <span className="text-ted">x</span> = independently organized TED
            event. At our <span className="text-ted">TEDxBitBangalore</span>{" "}
            event INSIGHTX, TED Talks video and live speakers will combine to
            spark deep discussion and connection in a small group. The TED
            Conference provides general guidance for the{" "}
            <span className="text-ted">TEDx </span> program, but individual{" "}
            <span className="text-ted">TEDx </span> events, including ours, are
            self-organized.
          </p>
          <h1 className="text-left my-0">
            What <span className="text-5xl">is</span>
            <br />
            <span className="text-ted underline text-8xl">
              <a href="https://www.ted.com/tedx">TEDx</a>
            </span>
            ?
          </h1>
        </div>

        {/* <div className=" my-20 ">
          <img
            className="hover:opacity-50 w-full"
            src={img_bit}
            alt="pic of bangalore city"
          />
        </div> */}
      </div>
    </div>
  );
};

export default HomePage;
