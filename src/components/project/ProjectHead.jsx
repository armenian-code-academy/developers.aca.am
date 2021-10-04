import React from 'react';
import Link from 'next/link';
export default function ProjectHead() {
  return (
    <div className="mt-8">
      <div>
        <h1 className="text-2xl text-textPrimary my-2 shadow py-5">
          Open source
        </h1>
        <p className="text-textPrimary pt-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div>
        <div className="my-2 text-textPrimary">
          <Link href="#">
            <a> Lorem, ipsum dolor.</a>
          </Link>
        </div>
        <div className="text-textPrimary">
          <Link href="#">
            <a> Lorem, ipsum.</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
