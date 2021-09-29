import React from 'react';

export default function TopSection({ header, content }) {
  return (
    <main>
      <div className="mt-8">
        <div className="mb-5">
          <div>
            <h1 className="text-4xl text-textLight">{header}</h1>
          </div>
        </div>
        <div>
          <p className="text-base text-textLight">{content}</p>
        </div>
      </div>
    </main>
  );
}
