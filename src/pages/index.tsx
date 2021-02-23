/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import { tw } from 'twind';
import CallToAction from '../components/callToAction';
import Layout from '../components/layout';

const features: {
  title: string;
  blurb: string;
}[] = [
  {
    title: 'Lorem ipsum dolor sit',
    blurb: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis lorem erat. Vestibulum
vel diam urna. Proin id elit id nibh dictum malesuada. Aliquam sed dapibus erat.`,
  },
  {
    title: 'Lorem ipsum dolor sit',
    blurb: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis lorem erat. Vestibulum
vel diam urna. Proin id elit id nibh dictum malesuada. Aliquam sed dapibus erat.`,
  },
  {
    title: 'Lorem ipsum dolor sit',
    blurb: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis lorem erat. Vestibulum
vel diam urna. Proin id elit id nibh dictum malesuada. Aliquam sed dapibus erat.`,
  },
];

export default function Home(): JSX.Element {
  return (
    <Layout>
      <section id="hero">
        {/* Hero (Title, Tagline, Get Started button) */}
      </section>
      <section id="features" className={tw`justify-center flex items-center my-10`}>
        <div className={tw`grid grid-cols-2 max-w-4xl gap-8`}>
          <div>
            {/* Image of profile from phone */}
          </div>
          <div>
            <span className={tw`block font-bold text-4xl mb-8`}>
              Why Lynnx?
            </span>
            {features.map(({ title, blurb }) => (
              <div key={title} className={tw`mb-8`}>
                <span className={tw`block text-gray-900 font-semibold text-xl mb-2`}>
                  {title}
                </span>
                <p>{blurb}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="cta">
        <CallToAction />
      </section>
    </Layout>
  );
}
