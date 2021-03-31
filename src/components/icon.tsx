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
    <div
      className={tw`
        bg-white
        border-2
        border-black
        shadow
        text-gray-700
        transition
        ease-in-out
        px-2.5 py-1.5
        cursor-pointer
        hover:(
          bg-black
          text-blue-400
        )
      `}
    >
      <a
        href={href}
        className={tw`flex justify-left items-center gap-1.5`}
        rel="noreferrer"
        target="_blank"
      >
        <span className={tw`w-5`}>{icon}</span>
      </a>
    </div>
  );
}
