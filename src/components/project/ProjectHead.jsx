import React from 'react';
import Link from 'next/link';
export default function ProjectHead() {
  return (
    <div>
      <div>
        <h1 className="text-2xl text-textPrimary">Open source</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div>
        <Link href="#">Lorem, ipsum dolor.</Link>
        <Link href="#">Lorem, ipsum.</Link>
      </div>
    </div>
  );
}
