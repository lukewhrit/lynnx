/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/

import { tw } from 'twind';

export default function Button({ name, color, href }: {
  name: string;
  color: string[];
  href: string;
}): JSX.Element {
  return (
    <div className={tw`
      ${color[0]}
      transition
      ease-in-out
      px-2 py-1
      rounded
      cursor-pointer
      hover:${color[1]}`}
    >
      <a
        href={href}
        className={tw`flex text-white justify-center items-center gap-2`}
        rel="noreferrer"
        target="_blank"
      >
        {name}
      </a>
    </div>
  );
}
