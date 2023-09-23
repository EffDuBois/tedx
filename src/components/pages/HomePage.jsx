import React from "react";

import logo from "../../resources/logo-Insightx-crop.jpg";
import img_bit from "../../resources/img-bit.jpg";

const HomePage = () => {
  return (
    <div>
      {/* <div
        style={{ "--image-url": `url(${logo})` }}
        className="w-full h-96 bg-[image:var(--image-url)]"
      ></div> */}
      <div className="h-[80vh] items-center flex bg-black">
        <img className="w-3/4 m-auto" src={logo} alt="event-logo" />
      </div>
      <div className="w-3/4 m-auto mt-32 mb-16">
        <h1>
          About <span className="text-white glow">TEDx</span>
        </h1>
        <p>
          A global movement dedicated to propagating the ideas to communities
          around the globe through independently organized TED-like events,
          meant to inspire conversation, prompt innovation and create
          connections. Officially, the ‘X’ in TEDx stands for independently
          organized TED event, but it’s more of a TED ‘multiplied’.
        </p>
      </div>
      <div className="w-3/4 m-auto my-16">
        <h1>
          About <span className="text-white glow">TEDxBITBangalore</span>
        </h1>
        <p>
          TEDxBITBangalore is a channel to propagate ideas globally through a
          local platform. We hold a university-level license from TED to
          organise an independent TED event to effectuate the same. It was
          initiated by a humble group of young visionaries dedicated to bringing
          together, ideas worth spreading. In this fifth edition of
          TEDxBITBangalore, we aspire to nurture the ideas that bear the
          potential to bring about a change in the world.
        </p>
      </div>
      <div className="w-3/4 m-auto my-20 border-glow ">
        <img
          className="hover:opacity-50 w-full"
          src={img_bit}
          alt="pic of bangalore city"
        />
      </div>
    </div>
  );
};

export default HomePage;
