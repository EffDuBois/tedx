import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Socials = () => {
  return (
    <div className="bg-invert text-invert min-h-[35vh] px-[8vw] flex lg:flex-row justify-between flex-col">
      <p className="text-center py-[8vh] lg:text-left text-m self-center font-normal [font-stretch:normal]">
        This independent TEDx event is operated under license from TED.
      </p>
      <div className="self-center flex pb-[8vh] pt-[3vh] lg:py-[3vw]">
        <a
          target="blank"
          href="https://www.linkedin.com/company/tedxbitbangalore"
        >
          <FontAwesomeIcon
            className="mx-1 h-[3rem] hover:animate-bounce"
            icon={faLinkedin}
            style={{ color: "black" }}
            size="2xl"
          />
        </a>
        <a target="blank" href="https://www.instagram.com/tedxbitbangalore/">
          <FontAwesomeIcon
            className="mx-1 h-[3rem] hover:animate-bounce"
            icon={faInstagram}
            style={{ color: "black" }}
            size="2xl"
          />
        </a>
        <a target="blank" href="mailto:tedxbitbangalore5@gmail.com">
          <FontAwesomeIcon
            className="mx-1 h-[3rem] hover:animate-bounce"
            icon={faEnvelope}
            style={{ color: "black" }}
            size="2xl"
          />
        </a>
      </div>
    </div>
  );
};

export default Socials;
