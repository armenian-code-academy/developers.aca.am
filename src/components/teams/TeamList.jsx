import React from "react";
import TeamComponent from "./TeamComponent";

export default function TeamList({ teamList }) {
  return (
    <div className="my-10">
      <div>
        {teamList?.map(({ data }, index) => {
          if (index % 2) return <TeamComponent content={data} key={index} />;
          return <TeamComponent content={data} reverse key={index} />;
        })}
      </div>
    </div>
  );
}
