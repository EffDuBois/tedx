import React from "react";
import Speaker1 from "../../resources/speakers/Abdul_Bari.jpg";

const PersonCard = () => {
  return (
    <div className="bg-rotatingx">
      <div className="bg-rotatingx x2">
        <div className="content">
          <img
            className="h-full cover hover:opacity-5 duration-150 absolute"
            src={Speaker1}
          />
          <div className=" h-full p-10 flex flex-col justify-items-center items-start  ">
            <p>Abdul Bari</p>
            <p>Education Content Creator</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonCard;
