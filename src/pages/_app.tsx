/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import { AppProps } from 'next/app';
import Head from 'next/head';
import { setup } from 'twind';
import * as colors from 'twind/colors';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  setup({
    darkMode: 'media',
    theme: {
      screens: {
        xs: '475px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      extend: {
        colors,
        fontSize: {
          '4.5xl': ['2.45rem', {
            lineHeight: '3rem',
          }],
          '1.5xl': ['1.35rem', {
            lineHeight: '2rem',
          }],
        },
        borderWidth: {
          2.5: '2.5px',
          3: '3px',
        },
      },
    },
  });

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5"
        />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <title>Lynnx</title>

        <link rel="manifest" href="/manifest.json" />
        <link
          href="/icons/icon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/icons/icon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <meta name="theme-color" content="#317EFB" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
