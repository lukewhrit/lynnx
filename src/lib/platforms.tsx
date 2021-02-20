/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/

type Platforms = {
  [key: string]: {
    url: (account: string) => string;
    color: string[];
  };
};

const platforms: Platforms = {
  twitter: {
    url: (account) => `https://twitter.com/${account}`,
    color: ['bg-blue-400', 'bg-blue-500'],
  },
  letterboxd: {
    url: (account) => `https://letterboxd.com/${account}`,
    color: ['bg-green-600', 'bg-green-700'],
  },
  github: {
    url: (account) => `https://github.com/${account}`,
    color: ['bg-gray-800', 'bg-gray-900'],
  },
  facebook: {
    url: (account) => `https://facebook.com/${account}`,
    color: ['bg-blue-800', 'bg-blue-900'],
  },
  youtube: {
    url: (account) => `https://youtube.com/${account}`,
    color: ['bg-red-500', 'bg-red-600'],
  },
  instagram: {
    url: (account) => `https://instagram.com/${account}`,
    color: ['bg-amber-400', 'bg-amber-500'],
  },
  twitch: {
    url: (account) => `https://twitch.tv/${account}`,
    color: ['bg-purple-600', 'bg-purple-700'],
  },
  reddit: {
    url: (account) => `https://reddit.com/u/${account}`,
    color: ['bg-orange-600', 'bg-orange-700'],
  },
  tumblr: {
    url: (account) => `https://${account}.tumblr.com`,
    color: ['bg-gray-600', 'bg-gray-700'],
  },
  tiktok: {
    url: (account) => `https://tiktok.com/@${account}`,
    color: ['bg-rose-500', 'bg-rose-600'],
  },
};

export default platforms;
