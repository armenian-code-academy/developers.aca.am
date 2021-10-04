import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Project() {
  return (
    <div>
      <Link href="#" passHref>
        <a>
          <div className="flex flex-row items-center">
            <div className="mr-4">
              <div className="relative w-20 h-20">
                <Image
                  src={require('/public/images/logo.png')}
                  alt="Logo"
                  layout="fill"
                />
              </div>
            </div>

            <div className="w-2/3">
              <div>
                <p className="text-textPrimary">
                  <b>Product name</b> ipsum dolor sit amet consectetur,
                  adipisicing elit. Consequuntur, odio!
                </p>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}
