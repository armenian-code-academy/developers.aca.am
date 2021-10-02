import Link from 'next/link';

export default function NavbarLink({ linkPath, linkContent, locale }) {
  return (
    <Link href={linkPath} passHref locale={locale}>
      <a className="my-1 text-sm font-medium text-textPrimary hover:text-primary active:text-primary md:mx-4 md:my-0">
        {linkContent}
      </a>
    </Link>
  );
}
