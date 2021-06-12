/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/

import Link from 'next/link';

const links = [
  [
    { label: 'About Lynnx', href: '/a/about', local: true },
    { label: 'Blog', href: '/a/blog', local: true },
    { label: 'Help Center', href: '/a/faq', local: true },
  ],
  [
    { label: 'Github', href: 'https://github.com/lukewhrit/lynnx', local: false },
    { label: 'Our Twitter', href: 'https://twitter.com/lynnxteam', local: false },
    { label: 'Contact', href: 'mailto:hi@lynnx.me', local: false },
  ],
  [
    { label: 'Terms of Service', href: '/a/terms', local: true },
    { label: 'Privacy Policy', href: '/a/privacy', local: true },
  ],
];

export default function Footer(): JSX.Element {
  return (
    <>
      <footer className="bg-black text-white font-medium px-8 py-6">
        <section className="grid grid-cols-3 max-w-lg text-md">
          {links.map((array) => array.map(({ label, href }) => (
            <div key={label} className="gap-2">
              <Link href={href}>
                <a
                  className="
                    hover:text-emerald-500
                    hover:underline
                    transition
                  "
                >
                  {label}
                </a>
              </Link>
            </div>
          )))}
        </section>
        <section className="py-4 text-gray-500 text-sm">
          Built in New Jersey, USA.
          <p>
            Copyright ©
            {' '}
            {new Date().getFullYear()}
            {' '}
            Luke W. All Rights Reserved.
          </p>
        </section>
      </footer>
    </>
  );
}
