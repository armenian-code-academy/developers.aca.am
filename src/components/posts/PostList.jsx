import React from 'react';
import PostComponent from './PostComponent';

export default function PostList({ postListData }) {
  return (
    <div className="mt-6 mb-8">
      <div className="mb-5">
        <p className="text-textLight">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius,
          aliquid.
        </p>
      </div>
      <div className="sm:grid md:grid-flow-row md:grid-cols-2 lg:grid-cols-4 gap-4">
        {postListData?.map((postData, index) => (
          <PostComponent key={index} />
        ))}
      </div>
    </div>
  );
}
