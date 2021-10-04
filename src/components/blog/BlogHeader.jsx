import { MDXRemote } from 'next-mdx-remote';
import React from 'react';

export default function BlogComponent({ header }) {
  return (
    <div className="mt-5">
      <div>
        <h1 className="text-textPrimary text-2xl shadow py-5">{header}</h1>
      </div>
    </div>
  );
}
