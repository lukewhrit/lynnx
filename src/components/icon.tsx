/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/

import { tw } from 'twind';

export default function Icon({ icon, href }: {
  icon: JSX.Element;
  href: string;
}): JSX.Element {
  return (
    <div className={tw`
      text-gray-700
      transition
      ease-in-out
      px-2 py-1
      rounded
      cursor-pointer
      hover:text-emerald-500`}
    >
      <a
        href={href}
        className={tw`flex justify-center items-center gap-2`}
        rel="noreferrer"
        target="_blank"
      >
        {icon}
      </a>
    </div>
  );
}
