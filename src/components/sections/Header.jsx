import classNames from 'classnames';
import React, { useState } from 'react';
import { paths } from '../../constants/router.constants';
import NavbarBrand from './navbar/NavbarBrand';
import NavbarToggler from './navbar/NavbarToggler';
import NavbarLink from './navbar/NavbarLink';
import { useRouter } from 'next/dist/client/router';
import Image from 'next/image';

export default function Header() {
  const [show, setShow] = useState(true);

  const handleClick = () => {
    setShow((prev) => !prev);
  };
  const { pathname } = useRouter();

  const navbarStyle = classNames({
    'md:flex items-center justify-center mt-5 md:mt-0': true,
    hidden: show,
  });

  return (
    <nav className="bg-white shadow sticky top-0 z-10">
      <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <NavbarBrand brandPath={paths.homePath()}>
            <Image
              src={require('/public/images/logo.svg')}
              alt="Brand"
              width={68}
              height={28}
            />
          </NavbarBrand>
          <NavbarToggler handleClick={handleClick} />
        </div>
        <div className={navbarStyle}>
          <div className="flex flex-col md:flex-row md:mx-6">
            <NavbarLink
              linkPath={paths.teamPath()}
              active={pathname === paths.teamPath() ? true : false}
              linkContent="Team"
            />
            <NavbarLink
              active={pathname === paths.openSourcePath() ? true : false}
              linkPath={paths.openSourcePath()}
              linkContent="Open Source"
            />
            <NavbarLink
              active={pathname === paths.blogPath() ? true : false}
              linkPath={paths.blogPath()}
              linkContent="Blog"
            />
            <NavbarLink
              active={pathname === paths.careersPath() ? true : false}
              linkPath={paths.careersPath()}
              linkContent="Careers"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
