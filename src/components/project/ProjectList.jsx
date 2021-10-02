import React from 'react';
import Project from './Project';
import ProjectHead from './ProjectHead';

export default function ProjectList() {
  let projectList = new Array(10).fill('-');
  return (
    <div>
      <div>
        {projectList.map((project) => {
          return <Project key={project} />;
        })}
      </div>
    </div>
  );
}
