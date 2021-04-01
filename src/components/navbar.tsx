/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/

import { tw } from 'twind';
import Link from 'next/link';
import Button from './button';

export default function Navbar(): JSX.Element {
  return (
    <nav className={tw`grid grid-cols-2 py-3 px-6 items-center`}>
      <div className={tw`flex items-center gap-3`}>
        <Link href="/">
          <a id="title" className={tw`hover:(underline text-emerald-600) transition`}>
            Lynnx
          </a>
        </Link>
      </div>
      <div className={tw`flex justify-end gap-5 items-center`}>
        <a href="/" className={tw`cursor-pointer transition delay-250 hover:(text-emerald-500 underline)`}>
          Sign In
        </a>
        <Button href="/">
          Register
        </Button>
      </div>
    </nav>
  );
}
