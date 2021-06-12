/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/

import Link from 'next/link';
import Button from './button';

export default function Navbar(): JSX.Element {
  return (
    <nav className="bg-black text-white grid grid-cols-2 py-2.5 px-6 items-center">
      <div className="flex items-center gap-3">
        <Link href="/">
          <a
            id="title"
            className="hover:underline hover:text-emerald-600 transition"
          >
            Lynnx
          </a>
        </Link>
        <Link href="/">
          <a className="cursor-pointer transition delay-250 hover:text-emerald-500 hover:underline">
            Home
          </a>
        </Link>
        <Link href="/a/about">
          <a className="cursor-pointer transition delay-250 hover:text-emerald-500 hover:underline">
            About
          </a>
        </Link>
      </div>
      <div className="flex justify-end gap-5 items-center">
        <Link href="/">
          <a className="cursor-pointer transition delay-250 hover:text-emerald-500 hover:underline">
            Sign In
          </a>
        </Link>
        <Button href="/">
          Register
        </Button>
      </div>
    </nav>
  );
}
