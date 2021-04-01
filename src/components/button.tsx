/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/

import { tw } from 'twind';
import classNames from 'classnames';

export default function Button({ href, children, layout = 'rectangle' }: {
  href: string;
  children: React.ReactNode;
  layout?: 'square' | 'rectangle';
}): JSX.Element {
  return (
    <a
      href={href}
      className={tw`
        ${classNames({
        'px-4 py-1.5': layout === 'rectangle',
        'p-2': layout === 'square',
      })}
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
