/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import { tw } from 'twind';
import Button from './button';

export default function CallToAction(): JSX.Element {
  return (
    <div className={tw`text-center mx-auto`}>
      <h1 className={tw`text-4.5xl font-black`}>
        Ready to dive in?
      </h1>
      <label htmlFor="username">
        <p className={tw`mb-3 text-1.5xl text-gray-600`}>
          Create your profile today.
        </p>
        <div className={tw`flex justify-center gap-3`}>
          <div className={tw`inline-block p-2 border-emerald-500 border-3`}>
            <div className={tw`flex justify-center items-center gap-1`}>
              <span
                className={tw`text-emerald-600 font-mono select-none`}
                id="prefix"
              >
                lynnx.me/u/
              </span>
              <input
                type="text"
                className={tw`bg-transparent font-mono lowercase`}
                id="username"
                aria-describedby="prefix"
              />
            </div>
          </div>
          <Button href="/" layout="square">
            ↪
          </Button>
        </div>
      </label>
    </div>
  );
}
