import React from "react";

const TeamCard = (props) => {
  return (
    <div
      className={` ${props.className} bg-rotatingx w-[75vw] h-[85vw] lg:w-team lg:h-team flex-none ${props.className}`}
    >
      <div className="bg-rotatingx x2">
        <div className="content h-full w-full">
          <div
            className=" w-full h-full bg-cover bg-center hover:opacity-0 duration-150 absolute"
            style={{ backgroundImage: `url(${props.src})` }}
          />
          {/* <img
          className="object-cover bg-clip-border w-auto h-full hover:opacity-0 duration-150 absolute"
          src={props.src}
          alt={props.name}
        /> */}
          <div className=" h-full flex flex-col justify-center items-center">
            <p className="font-bold lg:text-2xl text-3xls text-center">{props.name}</p>
            <p className="font-bold lg:text-xl text-center">{props.title}</p>
            <div className="h-3 w-2/3 bg-red-500 shadow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
