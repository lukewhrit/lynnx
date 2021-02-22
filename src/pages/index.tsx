/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import CallToAction from '../components/callToAction';
import Layout from '../components/layout';

export default function Home(): JSX.Element {
  return (
    <Layout>
      <section id="hero">
        {/* Hero (Title, Tagline, Get Started button) */}
      </section>
      <section id="features">
        {/* Features Section (Three) / Why Lynnx? */}
      </section>
      <section id="cta">
        <CallToAction />
      </section>
    </Layout>
  );
}
