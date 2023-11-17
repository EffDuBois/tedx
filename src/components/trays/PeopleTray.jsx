import React from "react";
import PersonCard from "../cards/PersonCardFolding";

const PeopleTray = (props) => {
  return (
    <div>
      {props.children}
      <div className="my-10 flex items-start [border-collapse:collapse] flex-wrap justify-center w-[90vw] m-auto">
        <div className="  lg:mt-[16vh]">
          {props.imageArray.map((img, index) =>
            index % 3 === 2 ? (
              <div className={`lg:border-t-4`}>
                <PersonCard
                  key={index}
                  src={img.path}
                  name={img.name}
                  title={img.title}
                  className="w-[75vw] h-[85vw] lg:w-card lg:h-card"
                />
              </div>
            ) : (
              ""
            )
          )}
        </div>
        <div className="lg:border-r-4 lg:border-l-4">
          {props.imageArray.map((img, index) =>
            index % 3 === 0 ? (
              <div
                className={`${index !== 0 ? "lg:border-t-4" : ""} ${
                  !props.imageArray[index + 3] && props.imageArray[index + 2]
                    ? "lg:border-b-4"
                    : ""
                }`}
              >
                <PersonCard
                  key={index}
                  src={img.path}
                  name={img.name}
                  title={img.title}
                  className="w-[75vw] h-[85vw] lg:w-card lg:h-card"
                />
              </div>
            ) : (
              ""
            )
          )}
        </div>
        <div className="lg:mt-[8vh]">
          {props.imageArray.map((img, index) =>
            index % 3 === 1 ? (
              <div
                className={`lg:border-t-4 ${
                  !props.imageArray[index + 3] && props.imageArray[index + 1]
                    ? "lg:border-b-4"
                    : ""
                }`}
              >
                <PersonCard
                  key={index}
                  src={img.path}
                  name={img.name}
                  title={img.title}
                  className=" w-[75vw] h-[85vw] lg:w-card lg:h-card"
                />
              </div>
            ) : (
              ""
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default PeopleTray;
