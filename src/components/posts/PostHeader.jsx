import React from 'react';
import Image from 'next/image';

export default function PostHeader() {
  return (
    <div className="mt-8">
      <div>
        <h2 className="text-xl text-textLight shadow px-5 py-8">
          Post headers
        </h2>
      </div>
      <div className="mx-auto mt-5 w-full lg:w-1/2 h-96 relative">
        <Image
          src={require('/public/images/screenSaver.jpg')}
          alt="content"
          layout="fill"
          objectFit="cover"
          objectPosition="0 0"
          placeholder="blur"
          blurDataURL={require('/public/images/screenSaver.jpg')}
          loading="eager"
        />
      </div>
    </div>
  );
}
