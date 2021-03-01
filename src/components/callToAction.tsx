/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import { tw } from 'twind';

export default function CallToAction(): JSX.Element {
  return (
    <div className={tw`text-center`}>
      <span className={tw`block mb-1 text-4.5xl font-black`}>
        Ready to dive in?
      </span>
      <span className={tw`block mb-3 text-1.5xl text-gray-600`}>
        Create your profile today.
      </span>
      <div className={tw`flex gap-4 justify-center items-center`}>
        <a
          href="/"
          className={tw`
            inline-block
            bg-emerald-500
            py-1.5 px-4
            rounded
            text-white
            hover:bg-emerald-600
            transition
          `}
        >
          Register
        </a>
        <a
          href="/"
          className={tw`
            inline-block
            text-black
            hover:text-emerald-500
            border-b-0
            hover:border-emerald-500
            hover:border-b
            transition
          `}
        >
          Sign In
        </a>
      </div>
    </div>
  );
}
