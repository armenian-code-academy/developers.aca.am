import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="py-5">
        <div className="flex items-start justify-center">
          <p role="presentation">
            <span className="text-textLight">
              © 2016 – {currentYear} Armenian Code Academy&apos;s{' '}
              <b> Software Engineering Team.</b>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
