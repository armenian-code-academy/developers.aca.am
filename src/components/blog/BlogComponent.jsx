import React from 'react'
import Image from 'next/image';
import Link from 'next/link';


export default function BlogComponent({ meta, sourcePath }) {
  return (
    <div className="border-b shadow p-5">
      <Link href={`/blog/${sourcePath}`} passHref>
        <a>
          <div>
            <h3 className="text-xl mb-8 text-textLight">{meta.title}</h3>
            <p className="text-xs my-2">{meta.description}</p>
          </div>
          <div className="w-full h-48 relative">
            <Image
              src={require(`../../../public/${meta.image}`)}
              alt={meta.description}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </a>
      </Link>
    </div>
  );
}
