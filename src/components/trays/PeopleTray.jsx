import React from "react";
import PersonCard from "../cards/PersonCardFolding";

const PeopleTray = (props) => {
  return (
    <div>
      {props.children}
      <div className="my-10 flex flex-wrap justify-center w-[90vw] m-auto">
        <div className="border-r-4">
          <h1 className="min-w-card text-center text-6xl">{props.firstText}</h1>

          {props.imageArray.map((img, index) =>
            index % 3 === 2 ? (
              <div className={`border-t-4`}>
                <PersonCard
                  key={index}
                  src={img.path}
                  name={img.name}
                  title={img.title}
                />
              </div>
            ) : (
              ""
            )
          )}
        </div>
        <div className="border-r-4">
          {props.imageArray.map((img, index) =>
            index % 3 === 0 ? (
              <div
                className={`${index !== 0 ? "border-t-4" : ""} ${
                  !props.imageArray[index + 3] && props.imageArray[index + 2]
                    ? "border-b-4"
                    : ""
                }`}
              >
                <PersonCard
                  key={index}
                  src={img.path}
                  name={img.name}
                  title={img.title}
                />
              </div>
            ) : (
              ""
            )
          )}
        </div>
        <div className="mt-[8vh]">
          <h1 className="min-w-card text-center text-6xl text-ted">
            {props.secondText}
          </h1>
          {props.imageArray.map((img, index) =>
            index % 3 === 1 ? (
              <div
                className={`border-t-4 ${
                  !props.imageArray[index + 3] && props.imageArray[index + 1]
                    ? "border-b-4"
                    : ""
                }`}
              >
                <PersonCard
                  key={index}
                  src={img.path}
                  name={img.name}
                  title={img.title}
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
