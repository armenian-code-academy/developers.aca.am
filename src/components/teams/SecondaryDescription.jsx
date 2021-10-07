import React from 'react';

export default function SecondaryDescription({
  header,
  firstContent,
  secondContent,
}) {
  return (
    <div className="mb-5">
      <div>
        <h3 className="text-textLight text-2xl">{header}</h3>
      </div>
      <div className="my-5">
        <p className="text-textPrimary my-1">{firstContent}</p>
        <p className="text-textPrimary">{secondContent}</p>
      </div>
    </div>
  );
}
