import React from 'react';


import TeamComponent from './TeamComponent';

export default function TeamList({ teamList }) {
  return (
    <div className="my-10">
      <div>
        <h2 className="text-2xl text-textPrimary" s>
          Lorem, ipsum dolor.
        </h2>
      </div>
      <div>
        {teamList?.map(({ data }, index) => {
          if (index % 2) return <TeamComponent content={data} key={index} />;
          return <TeamComponent content={data} reverse key={index} />;
        })}
      </div>
    </div>
  );
}

