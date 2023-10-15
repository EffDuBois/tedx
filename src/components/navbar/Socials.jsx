import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Socials = () => {
  return (
    <div className="bg-invert text-invert py-20 px-32 flex lg:flex-row justify-between flex-col">
      <p className="text-center lg:text-left text-m self-center font-normal [font-stretch:normal]">
        This independent TEDx event is operated under license from TED.
      </p>
      <div className="self-center flex py-8 mx-3">
        <a
          target="blank"
          href="https://www.linkedin.com/company/tedxbitbangalore"
        >
          <FontAwesomeIcon
            className="mx-1 h-[4rem] hover:animate-bounce"
            icon={faLinkedin}
            style={{ color: "black" }}
            size="2xl"
          />
        </a>
        <a target="blank" href="https://www.instagram.com/tedxbitbangalore/">
          <FontAwesomeIcon
            className="mx-1 h-[4rem] hover:animate-bounce"
            icon={faInstagram}
            style={{ color: "black" }}
            size="2xl"
          />
        </a>
        <a target="blank" href="mailto:tedxbitbangalore5@gmail.com">
          <FontAwesomeIcon
            className="mx-1 h-[4rem] hover:animate-bounce"
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
