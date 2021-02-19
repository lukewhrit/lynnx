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
    label: 'Terms',
    href: '/tos',
  },
  {
    label: 'Privacy',
    href: '/privacy',
  },
];

export default function Footer(): JSX.Element {
  return (
    <>
      <hr className={tw`my-5 px-4 sm:px-6 lg:px-8 mx-auto`} />
      <footer className={tw`text-gray-500 font-medium mt-5 font-medium`}>
        <div className={tw`grid grid-rows-2 md:(grid-rows-1 grid-cols-2)`}>
          <section>
            Built in New Jersey, USA on Leni Lenape land. Copyright ©
            {' '}
            {new Date().getFullYear()}
            {' '}
            Luke W.
          </section>
          <section className={tw`flex gap-2 justify-end`}>
            {links.map(({ label, href }) => (
              <div key={label}>
                <Link href={href}>
                  <a
                    className={tw`
                      hover:text-emerald-500
                      transition
                      hover:border-b-1
                      hover:border-emerald-500
                    `}
                  >
                    {label}
                  </a>
                </Link>
                <span className={tw`select-none last:hidden`}>·</span>
              </div>
            ))}
          </section>
        </div>
      </footer>
    </>
  );
}
