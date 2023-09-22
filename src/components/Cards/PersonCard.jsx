import React from "react";
import Speaker1 from "../../resources/speakers/Abdul_Bari.jpg"

const PersonCard = () => {
  return (
    <div className="bg-rotatingx">
      <div className="bg-rotatingx x2">
        <div className="content">
          <img className="h-full cover" src={Speaker1}/>
        </div>
      </div>
    </div>
  );
};

export default PersonCard;
