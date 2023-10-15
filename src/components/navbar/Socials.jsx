import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Socials = () => {
  return (
    <div className="bg-white text-black py-20 px-32 flex lg:flex-row justify-between flex-col">
      <p className="text-center lg:text-left text-m self-center">
        This independent TEDx event is operated under license from TED.
      </p>
      <div className="self-center flex py-8 mx-3">
        <a
          target="blank"
          href="https://www.linkedin.com/company/tedxbitbangalore"
        >
          <FontAwesomeIcon
            className="mx-1 h-[4rem]"
            icon={faLinkedin}
            style={{ color: "#ababab" }}
            size="2xl"
          />
        </a>
        <a target="blank" href="https://www.instagram.com/tedxbitbangalore/">
          <FontAwesomeIcon
            className="mx-1 h-[4rem]"
            icon={faInstagram}
            style={{ color: "#ababab" }}
            size="2xl"
          />
        </a>
        <a target="blank" href="mailto:tedxbitbangalore5@gmail.com">
          <FontAwesomeIcon
            className="mx-1 h-[4rem]"
            icon={faEnvelope}
            style={{ color: "#ababab" }}
            size="2xl"
          />
        </a>
      </div>
    </div>
  );
};

export default Socials;
