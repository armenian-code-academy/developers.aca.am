import React from 'react'
import Image from 'next/image';

export default function BlogComponent({ meta }) {
  return (
    <div>
      <div>
        <h3>{meta.title}</h3>
        <p>{meta.description}</p>
      </div>
      <div className="w-32 h-24">
        <Image src={require(meta.image)} alt={meta.description} layout="fill" />
      </div>
    </div>
  );
}
