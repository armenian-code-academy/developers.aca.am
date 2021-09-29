import React from 'react';
import Link from 'next/link';

export default function NavbarBrand({ brandPath, brandContent }) {
  return (
    <div>
      <Link href={brandPath} passHref>
        <a className="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300">
          {brandContent}
        </a>
      </Link>
    </div>
  );
}
