import React from 'react';
import PostComponent from './PostComponent';
import PostHeader from './PostHeader';

export default function PostList() {
  let list = new Array(8).fill('+');
  return (
    <div className="mt-6">
      <div className="mb-5">
        <p className="text-textLight">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius,
          aliquid.
        </p>
      </div>
      <div className="sm:grid grid-flow-row md:grid-cols-2 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-4 gap-4">
        {list.map((component) => (
          <PostComponent key={component} />
        ))}
      </div>
    </div>
  );
}
