/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/

import { tw } from 'twind';

export default function Button({ href, children }: {
  href: string;
  children: React.ReactNode;
}): JSX.Element {
  return (
    <a
      href={href}
      className={tw`
        py-1.5 px-5
        text-emerald-600
        border-3
        transition
        delay-250
        border-emerald-500
        cursor-pointer
        hover:(
          animate-fade-in
          text-white
          bg-emerald-500
        )
      `}
    >
      {children}
    </a>
  );
}
