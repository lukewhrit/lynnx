/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import { tw } from 'twind';
import Button from './button';

export default function CallToAction(): JSX.Element {
  return (
    <div className={tw`text-center`}>
      <span className={tw`block mb-1 text-4.5xl font-black`}>
        Ready to dive in?
      </span>
      <label className={tw`inline-block`} htmlFor="username">
        <p className={tw`mb-3 text-1.5xl text-gray-600`}>Create your profile today.</p>
        <div className={tw`border-2 mr-3 bg-white`}>
          <span className={tw`text-emerald-600 font-mono select-none p-2`} id="prefix">
            lynnx.me/u/
          </span>
          <input
            type="text"
            className={tw`p-2 font-mono lowercase`}
            id="username"
            aria-describedby="prefix"
          />
        </div>
      </label>
      <Button href="/" layout="square">
        ↪
      </Button>
    </div>
  );
}
