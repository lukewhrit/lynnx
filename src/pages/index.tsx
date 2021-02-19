/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import Layout from '../components/layout';

export default function Home(): JSX.Element {
  return (
    <Layout>
      <h1>
        Welcome to
        {' '}
        <a href="https://nextjs.org">Next.js!</a>
      </h1>
    </Layout>
  );
}
