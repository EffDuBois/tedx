import React from "react";

import logo from "../../resources/images/logo-Insightx-crop.jpg";
import img_bit from "../../resources/images/img-bit.jpg";

const HomePage = () => {
  return (
    <div>
      {/* <div className="h-[75vh] items-center flex">
        <img className="" src={logo} alt="event-logo" />
      </div> */}
      <div className="border-b-2">
        <h1 className="text-[200px] text-left mx-5 mt-[210px] mb-[180px]">Insightx</h1>
        <p className="text-right m-8 font-normal [font-stretch:normal]">Scroll</p>
      </div>

      <div className="mt-20 mx-gutter lg:mx-gutterbig">
        <div className="flex gap-x-[5vw] justify-end basis-0 my-20">
          <h1 className="text-right my-0">
            About
            <span className="text-ted">
              <br />
              TEDx
              <br />
              <span className="text-6xl">BITBangalore</span>
            </span>
          </h1>
          <p className="max-w-[45vw]">
            TEDxBITBangalore is a channel to propagate ideas globally through a
            local platform. We hold a university-level license from TED to
            organise an independent TED event to effectuate the same. It was
            initiated by a humble group of young visionaries dedicated to
            bringing together, ideas worth spreading. In this fifth edition of
            TEDxBITBangalore, we aspire to nurture the ideas that bear the
            potential to bring about a change in the world.
          </p>
        </div>
        <div className="flex gap-x-[5vw] basis-0 justify-end mb-32">
          <h1 className="text-right my-0">
            What is
            <br />
            <span className="text-ted underline">
              <a href="https://www.ted.com/tedx">TEDx</a>
            </span>
            ?
          </h1>
          <p className="max-w-[45vw]">
            In the spirit of ideas worth spreading, TED has created a program
            called TEDx. TEDx is a program of local, self-organized events that
            bring people together to share a TED-like experience. Our event is
            called TEDxBitBangalore, where x = independently organized TED
            event. At our TEDxBitBangalore event INSIGHTX, TED Talks video and
            live speakers will combine to spark deep discussion and connection
            in a small group. The TED Conference provides general guidance for
            the TEDx program, but individual TEDx events, including ours, are
            self-organized.
          </p>
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
