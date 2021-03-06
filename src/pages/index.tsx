/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import Button from '../components/button';
import CallToAction from '../components/callToAction';
import Layout from '../components/layout';

const features = [
  {
    title: '💡 Share your link anywhere.',
    blurb: `Since Lynnx is just a website, and your profile is just a page on it you can share the
    link to your profile anywhere, allowing your profile to be truly universal.`,
  },
  {
    title: '🤩 Blog posts, account links, and more!',
    blurb: `Lynnx isn't just a webpage where you can share links to your other social media accounts,
    it's your new home on the web, with blog posts, donation handling, and more.`,
  },
  {
    title: '🎨 Totally Customizable.',
    blurb: `We've been committed since day one to allow our users to create a totally customizable
    experience on their profile. You can change colors, layout, images, and more.`,
  },
  {
    title: '🥳 100% free, open-source, and private.',
    blurb: `We built Lynnx using open-source, privacy-respecting technologies allowing us to keep
    the app totally free and open-source.`,
  },
];

export default function Home(): JSX.Element {
  return (
    <Layout>
      <section id="hero" className="bg-black mb-8">
        <div className="mx-auto py-16 px-4 sm:px-6 lg:px-8 justify-center flex text-center">
          <div>
            <h2 className="text-4xl font-bold text-emerald-500">
              Global profiles for a more social web.
            </h2>
            <p className="p-5 text-lg text-gray-300 max-w-3xl">
              Lynnx provides a single, global profile that makes all of your social media accounts,
              blog posts, and way more available behind a single URL.
            </p>
            <Button href="/#cta">
              Register an Account
            </Button>
          </div>
        </div>
      </section>
      <section id="features" className="justify-center flex items-center my-10">
        <div className="grid grid-cols-2 max-w-4xl gap-8">
          <div className="h-1/2">
            {/* @todo Use Next.js <Image> component here */}
            <img
              src="https://i.imgur.com/p1Ry5ek.png"
              alt=""
            />
          </div>
          <div className="flex items-center">
            <div className="block">
              <p className="font-bold text-4xl text-emerald-500 mb-8">
                Why Lynnx?
              </p>
              {features.map(({ title, blurb }) => (
                <div key={title} className="mb-8">
                  <span className="block text-gray-900 font-semibold text-xl mb-2">
                    {title}
                  </span>
                  <p>{blurb}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section id="cta">
        <CallToAction />
      </section>
    </Layout>
  );
}
