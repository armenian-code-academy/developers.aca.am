import React from 'react';
import Image from 'next/image';

export default function PostHeader() {
  return (
    <div className="mt-8">
      <div>
        <h2 className="text-xl text-textLight">Post headers</h2>
      </div>
      <div className="mt-5  w-full h-96 relative">
        <Image
          src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80"
          alt="content"
          layout="fill"
          objectFit="cover"
          objectPosition="0"
        />
      </div>
    </div>
  );
}
