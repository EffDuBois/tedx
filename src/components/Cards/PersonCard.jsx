import React from "react";


const PersonCard = (props) => {
  return (
    <div className="bg-rotatingx h-[500px] min-w-[420px]  my-10">
      <div className="bg-rotatingx x2">
        <div className="content h-[97%] w-[93%]">
          <img
            className="h-full cover hover:opacity-5 duration-150 absolute"
            src={props.img}
          />
          <div className=" h-full p-10 flex flex-col justify-items-center items-start  ">
            <p>{props.name}</p>
            <p>{props.title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonCard;
