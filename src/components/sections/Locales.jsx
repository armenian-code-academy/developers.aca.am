import React from 'react';
import NavbarLink from './navbar/NavbarLink';
import { useRouter } from 'next/dist/client/router';
import { localeNames } from '../../constants/locales.constants';

export default function Locales() {
  const { locales, asPath, locale } = useRouter();

  return (
    <div className="md:mr-10 mt-5">
      <div className="mb-3 flex flex-row items-center justify-end gap-1 mr-6">
        {locales.map((localeItem, index, arr) => {
          return (
            <div key={localeItem}>
              <NavbarLink
                active={locale === localeItem ? true : false}
                locale={localeItem}
                linkPath={asPath}
                linkContent={localeNames[localeItem]}
              />
              {index === arr.length - 1 ? null : <span> / </span>}
            </div>
          );
        })}
      </div>
    </div>
  );
}
