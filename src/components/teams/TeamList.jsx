import React from 'react';
import TeamComponent from './TeamComponent';

export default function TeamList() {
  let teams = new Array(8).fill('=');
  return (
    <div className="my-2">
      <div>
        <h2>Lorem, ipsum dolor.</h2>
      </div>
      <div>
        {teams.map((team, index) => {
          if (index % 2) return <TeamComponent key={index} />;
          return <TeamComponent reverse key={index} />;
        })}
      </div>
    </div>
  );
}
