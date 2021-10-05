import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { blogPath } from '../../constants/path.constants';

export default function BlogComponent({ meta, sourcePath }) {
  return (
    <div>
      <Link href={`${blogPath(sourcePath)}`}>
        <a>
          <div>
            <h3>{meta.title}</h3>
            <p>{meta.description}</p>
          </div>
          <div className="w-32 h-24 relative">
            <Image
              src={require(meta?.image)}
              alt={meta.description}
              layout="fill"
            />
          </div>
        </a>
      </Link>
    </div>
  );
}
