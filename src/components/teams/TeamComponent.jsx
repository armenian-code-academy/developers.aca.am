import React from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import { bool } from 'prop-types';

export default function TeamComponent({ reverse, content }) {
  const componentStyle = classNames({
    'flex flex-col items-start justify-center py-5 border-b border-gray-300': true,
    'md:flex-row': !reverse,
    'md:flex-row-reverse': reverse,
  });

  return (
    <div className={componentStyle}>
      <div className="w-full sm:w-1/2 md:w-1/3 md:mx-5">
        <div className="flex flex-col items-start justify-center">
          <div className="relative w-full h-48">
            <Image
              src={require(`../../../public/${content?.image}`)}
              layout="fill"
              objectFit="cover"
              alt="head"
            />
          </div>
          <div className="my-2">
            <div>
              <span>{content?.memberInfo}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <p>{content?.about}</p>
      </div>
    </div>
  );
}

TeamComponent.propTypes = {
  reverse: bool,
};
TeamComponent.defaultProps = {
  reverse: false,
};
