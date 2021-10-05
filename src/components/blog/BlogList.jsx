import React from 'react';
import BlogComponent from './BlogComponent';

export default function BlogList({ blogList }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
      {blogList?.map(({ data, slug }, index) => {
        return <BlogComponent key={index} meta={data} sourcePath={slug} />;
      })}
    </div>
  );
}
