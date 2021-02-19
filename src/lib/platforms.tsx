/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/

import FilmIcon from '../components/icons/film';
import GithubIcon from '../components/icons/github';
import TwitterIcon from '../components/icons/twitter';

type Platforms = {
  [key: string]: {
    icon: JSX.Element;
    url: (account: string) => string;
    color: string[];
  };
};

const platforms: Platforms = {
  twitter: {
    icon: <TwitterIcon />,
    url: (account) => `https://twitter.com/${account}`,
    color: ['bg-blue-500', 'bg-blue-400'],
  },
  letterboxd: {
    icon: <FilmIcon />,
    url: (account) => `https://letterboxd.com/${account}`,
    color: ['bg-gray-600', 'bg-gray-500'],
  },
  github: {
    icon: <GithubIcon />,
    url: (account) => `https://github.com/${account}`,
    color: ['bg-gray-800', 'bg-gray-700'],
  },
};

export default platforms;
