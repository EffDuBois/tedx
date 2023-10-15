import React from "react";

const PersonCard = (props) => {
  return (
    <div className="bg-rotatingx w-[75vw] h-[85vw] lg:w-[25vw] lg:h-[29vw] grow-0 shrink-0 my-10">
      <div className="bg-rotatingx x2">
        <div className="content h-[97%] w-[93%]">
          <img
            className="object-cover h-full hover:opacity-0 duration-150 absolute"
            src={props.src}
            alt={props.name}
          />
          <div className=" h-full p-10 flex flex-col justify-center">
            <p className="font-bold text-3xl ">{props.name}</p>
            <p className="font-bold">{props.title}</p>
            <div className="h-3 bg-red-500 shadow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonCard;
