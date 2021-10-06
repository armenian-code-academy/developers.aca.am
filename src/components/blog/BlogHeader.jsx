import React from 'react';

export default function BlogHeader({ header }) {
  return (
    <div className="mt-5">
      <div>
        <h1 className="text-textPrimary text-2xl shadow py-5 px-6">{header}</h1>
      </div>
    </div>
  );
}
