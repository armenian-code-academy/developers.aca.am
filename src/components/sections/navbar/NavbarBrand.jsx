import React, { Children } from "react";
import Link from "next/link";

export default function NavbarBrand({ brandPath, children }) {
  return (
    <div>
      <Link href={brandPath} passHref>
        <a className="flex text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-primary duration-75 active:text-purple-500">
          {children}
        </a>
      </Link>
    </div>
  );
}
