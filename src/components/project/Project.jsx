import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Project() {
  return (
    <div>
      <div>
        <div>
          <Link href="#" passHref>
            <a>
              <div className="relative w-20 h-20">
                <Image src="/public/images/logo.png" alt="Logo" layout="fill" />
              </div>
            </a>
          </Link>
        </div>
      </div>
      <div>
        <div>
          <p>
            <b>Product name</b> ipsum dolor sit amet consectetur, adipisicing
            elit. Consequuntur, odio!
          </p>
        </div>
      </div>
    </div>
  );
}
