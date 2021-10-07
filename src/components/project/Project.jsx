import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Project({ projectData }) {
  const { title, description, imagePath, linkUrl } = projectData;
  return (
    <div className="shadow py-5 hover:shadow-none hover:border-primary duration-100 border-b ">
      <Link href={linkUrl} passHref>
        <a>
          <div className="flex flex-row items-start justify-center">
            <div className="mr-4">
              <div>
                <Image
                  src={require(`/public/${imagePath}`)}
                  alt={title}
                  width={60}
                  height={60}
                  objectFit="cover"
                />
              </div>
            </div>
            <div className="w-2/3">
              <div>
                <p className="text-textPrimary">
                  <b>{title}</b> {description}
                </p>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}
