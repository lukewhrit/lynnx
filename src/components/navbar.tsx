/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/

import Link from 'next/link';
import Button from './button';

export default function Navbar(): JSX.Element {
  return (
    <nav className="grid grid-cols-2 py-2 px-6 items-center">
      <div className="flex items-center gap-3">
        <Link href="/">
          <a
            id="title"
            className="hover:underline hover:text-emerald-600 transition"
          >
            Lynnx
          </a>
        </Link>
      </div>
      <div className="flex justify-end gap-5 items-center">
        <a
          href="/"
          className="cursor-pointer transition delay-250 hover:text-emerald-500 hover:underline"
        >
          Sign In
        </a>
        <Button href="/">
          Register an Account
        </Button>
      </div>
    </nav>
  );
}
