import classNames from 'classnames';
import React, { useState } from 'react';
import {
  homePath,
  teamPath,
  openSourcePath,
  blogPath,
  blogPagePath,
  careersPath,
  careersPagePath,
} from '../../constants/router.constants';
import NavbarBrand from './navbar/NavbarBrand';
import NavbarToggler from './navbar/NavbarToggler';
import NavbarLink from './navbar/NavbarLink';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';

export default function Header() {
  const [show, setShow] = useState(true);
  const handleClick = () => {
    setShow((prev) => !prev);
  };
  const { locales, asPath, pathname, locale } = useRouter();

  const navbarStyle = classNames({
    'md:flex items-center justify-center': true,
    hidden: show,
  });

  return (
    <header>
      <div className="md:mr-20 mt-5">
        <div className="flex flex-row items-center justify-center md:justify-end gap-1">
          {locales.map((localeItem, index, arr) => {
            return (
              <div key={localeItem}>
                <NavbarLink
                  active={locale === localeItem ? true : false}
                  locale={localeItem}
                  linkPath={asPath}
                  linkContent={localeItem}
                />
                {index === arr.length - 1 ? null : <span> / </span>}
              </div>
            );
          })}
        </div>
      </div>
      <nav className="bg-white shadow">
        <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
          <div className="flex items-center justify-between">
            <NavbarBrand brandPath={homePath()} brandContent="Brand" />
            <NavbarToggler handleClick={handleClick} />
          </div>
          <div className={navbarStyle}>
            <div className="flex flex-col md:flex-row md:mx-6">
              <NavbarLink
                linkPath={teamPath()}
                active={pathname === teamPath() ? true : false}
                linkContent="Team"
              />
              <NavbarLink
                active={pathname === openSourcePath() ? true : false}
                linkPath={openSourcePath()}
                linkContent="Open Source"
              />
              <NavbarLink
                active={pathname === blogPath() ? true : false}
                linkPath={blogPath()}
                linkContent="Blog"
              />
              <NavbarLink
                active={pathname === blogPagePath() ? true : false}
                linkPath={blogPagePath()}
                linkContent="Blog page"
              />
              <NavbarLink
                active={pathname === careersPath() ? true : false}
                linkPath={careersPath()}
                linkContent="Careers"
              />
              <NavbarLink
                active={pathname === careersPagePath() ? true : false}
                linkPath={careersPagePath()}
                linkContent="Careers page"
              />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
