import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Socials = () => {
  return (
    <div className="bg-white text-black py-20 px-10 flex flex-row justify-between sm:flex-col">
      <p className=" text-sm">
        This independent TEDx event is operated under license from TED.
      </p>
      <div>
        <a target="blank" href="https://www.instagram.com/tedxbitbangalore/">
          <FontAwesomeIcon
            className="mx-3"
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
            className="mx-3"
            icon={faInstagram}
            style={{ color: "#ababab" }}
            size="2xl"
          />
        </a>
        <a target="blank" href="mailto:tedxbitbangalore5@gmail.com">
          <FontAwesomeIcon
            className="mx-3"
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
