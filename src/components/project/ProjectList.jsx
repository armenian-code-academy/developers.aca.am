import React from 'react';
import Project from './Project';

export default function ProjectList({ projectList }) {
  return (
    <div className="my-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-2 gap-y-10">
        {projectList?.map(({ data }, index) => {
          return <Project projectData={data} key={index} />;
        })}
      </div>
    </div>
  );
}
