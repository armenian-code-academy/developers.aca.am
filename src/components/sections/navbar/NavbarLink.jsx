                                          import React from 'react';
import Link from 'next/link';
export default function NavbarLink({ linkPath, linkContent }) {
  return (
    <Link href={linkPath} passHref>
      <a className="my-1 text-sm font-medium text-gray-700 hover:text-primary active:text-primary md:mx-4 md:my-0">
        {linkContent}
      </a>
    </Link>
  );
}
