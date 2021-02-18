/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/

import { tw } from 'twind'
import Link from 'next/link'

export default function Navbar ({ links }: {
  links: {
    href: string;
    label: string;
    isLocal: boolean;
  }[]
}): JSX.Element {
  return (
    <nav className={tw`flex justify-between items-center mb-1`}>
      <span
        id="title"
        className={tw`mr-3 inline-block font-bold py-1 text-gray-900`}
      >
        Lynnx
      </span>
      <ul className={tw`flex gap-2.5`}>
        {links.map(({ href, label, isLocal }) => {
          return (
            <li
              className={tw`mr-3 font-semibold`}
              key={label}
            >
              {isLocal
                ? (
                    <Link href={href}>
                      <a className={tw`text-emerald-500 hover:border-b hover:border-emerald-500 transition`}>
                        {label}
                      </a>
                    </Link>
                  )
                : (
                    <a
                      className={tw`text-emerald-500 hover:border-b hover:border-emerald-500 transition`}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {label}
                    </a>
                  )}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
