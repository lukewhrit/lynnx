/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/

import Link from 'next/link';
import { tw } from 'twind';

const links: {
  label: string;
  href: string;
}[] = [
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Terms',
    href: '/terms',
  },
  {
    label: 'Privacy',
    href: '/privacy',
  },
  {
    label: 'Help Center',
    href: '/help',
  },
  {
    label: 'Blog',
    href: '/blog',
  },
  {
    label: 'Placeholder',
    href: '/',
  },
];

export default function Footer(): JSX.Element {
  return (
    <>
      <footer className={tw`bg-black text-white font-medium px-8 py-6`}>
        <section className={tw`grid grid-cols-2 max-w-xs text-md`}>
          {links.map(({ label, href }) => (
            <div key={label} className={tw`gap-2`}>
              <Link href={href}>
                <a
                  className={tw`
                    hover:(text-emerald-500 underline)
                    transition
                  `}
                >
                  {label}
                </a>
              </Link>
            </div>
          ))}
        </section>
        <section className={tw`py-4 text-gray-500 text-sm`}>
          Built in New Jersey, USA on the land of the Lenape people.
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
