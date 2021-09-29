import React from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import { bool } from 'prop-types';

export default function TeamComponent({ reverse }) {
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
              src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80"
              layout="fill"
              objectFit="cover"
              alt="head"
            />
          </div>
          <div className="my-2">
            <div>
              <span>Person name</span>
            </div>
            <div>
              <span>Person position</span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
          distinctio tempore ullam nihil eaque accusamus quia porro et officiis
          consectetur cumque, tenetur odio accusantium, quis suscipit quibusdam.
          Aspernatur, sapiente nemo omnis dolore a minus odit facere, quam
          molestiae, quo quidem nulla molestias vitae repellendus maiores ipsam
          earum. Recusandae, vero quam.
        </p>
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
