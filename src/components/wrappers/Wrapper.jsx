import React from 'react';

export default function Wrapper({ children }) {
  return <div className="w-10/12 md:w-11/12 mx-auto">{children}</div>;
}
