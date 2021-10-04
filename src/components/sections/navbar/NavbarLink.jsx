import classNames from 'classnames';
import Link from 'next/link';
import { bool } from 'prop-types';

export default function NavbarLink({ linkPath, linkContent, locale, active }) {
  const linkStyle = classNames({
    'my-1 text-sm font-medium md:mx-4 md:my-0': true,
    'text-textPrimary hover:text-primary active:text-primary': !active,
    'text-primary hover-textPrimary active-textPrimary': active,
  });

  return (
    <Link href={linkPath} passHref locale={locale}>
      <a className={linkStyle}>{linkContent}</a>
    </Link>
  );
}

NavbarLink.propTypes = {
  active: bool,
};

NavbarLink.defaultProps = {
  active: false,
};
