import React from 'react'
import BlogComponent from './BlogComponent';

export default function BlogList({ blogList }) {
  return (
    <div>
      {blogList?.map(({}) => {
        <BlogComponent />;
      })}
    </div>
  );
}
