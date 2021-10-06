import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';

export default function BlogItem({ meta, sourcePath }) {
  const { locale } = useRouter();

  return (
    <div className="border-b shadow p-5 hover:shadow-none hover:border-primary hover:border hover:border-2 duration-100">
      <Link href={`/blog/${sourcePath}`} locale={locale} passHref>
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
