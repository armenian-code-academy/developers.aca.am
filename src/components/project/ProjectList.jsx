import React from 'react';
import Project from './Project';
import ProjectHead from './ProjectHead';

export default function ProjectList() {
  let projectList = new Array(50).fill('-');
  return (
    <div className="my-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-2 gap-y-10">
        {projectList.map((project) => {
          return <Project key={project} />;
        })}
      </div>
    </div>
  );
}
