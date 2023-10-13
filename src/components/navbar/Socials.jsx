import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Socials = () => {
  return (
    <div className="bg-white text-black py-20 px-32 flex sm:flex-row justify-between flex-col">
      <p className="text-center sm:text-justify text-m self-center">
        This independent TEDx event is operated under license from TED.
      </p>
      <div className="self-center py-8">
        <a target="blank" href="https://www.instagram.com/tedxbitbangalore/">
          <FontAwesomeIcon
            className="mx-3 h-[7vh]"
            icon={faLinkedin}
            style={{ color: "#ababab" }}
            size="2xl"
          />
        </a>
        <a
          target="blank"
          href="https://www.linkedin.com/company/tedxbitbangalore"
        >
          <FontAwesomeIcon
            className="mx-3 h-[7vh]"
            icon={faInstagram}
            style={{ color: "#ababab" }}
            size="2xl"
          />
        </a>
        <a target="blank" href="mailto:tedxbitbangalore5@gmail.com">
          <FontAwesomeIcon
            className="mx-3 h-[7vh]"
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
