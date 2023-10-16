import React from "react";
import PersonCard from "../cards/PersonCardFolding";

const PeopleTray = (props) => {
  return (
    <div className="my-20 flex flex-wrap justify-stretch m-auto w-full">
      <div>
        {props.children}
        {props.imageArray.map((img, index) =>
          index % 3 === 2 ? (
            <div className="border-t-4">
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
      <div>
        {props.imageArray.map((img, index) =>
          index % 3 === 0 ? (
            <div className={` border-l-4 ${index !== 0 ? "border-t-4" : ""}`}>
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
      <div className="mt-[16vh]">
        {props.imageArray.map((img, index) =>
          index % 3 === 1 ? (
            <div className="border-t-4 border-l-4">
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
  );
};

export default PeopleTray;
