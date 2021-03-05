/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/

import { tw } from 'twind';
import Footer from './footer';
import Navbar from './navbar';

export default function Layout({ children }: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <div className={tw`container mx-auto py-8 px-4`}>
      <header>
        <Navbar links={[
          { href: '/', label: 'Home', isLocal: true },
          { href: '/help', label: 'Help Center', isLocal: true },
          { href: '/u/lynnx', label: 'Blog', isLocal: true },
        ]}
        />
      </header>
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
}
