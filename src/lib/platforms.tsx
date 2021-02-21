/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/

import TwitterIcon from '../components/icons/twitter';
import FilmIcon from '../components/icons/film';
import GithubIcon from '../components/icons/github';

interface Platforms {
  [key: string]: {
    url: (account: string) => string;
    icon: JSX.Element;
  };
}

const platforms: Platforms = {
  twitter: {
    url: (account) => `https://twitter.com/${account}`,
    icon: <TwitterIcon />,
  },
  letterboxd: {
    url: (account) => `https://letterboxd.com/${account}`,
    icon: <FilmIcon />,
  },
  github: {
    url: (account) => `https://github.com/${account}`,
    icon: <GithubIcon />,
  },
  facebook: {
    url: (account) => `https://facebook.com/${account}`,
    icon: <></>,
  },
  youtube: {
    url: (account) => `https://youtube.com/${account}`,
    icon: <></>,
  },
  instagram: {
    url: (account) => `https://instagram.com/${account}`,
    icon: <></>,
  },
  twitch: {
    url: (account) => `https://twitch.tv/${account}`,
    icon: <></>,
  },
  reddit: {
    url: (account) => `https://reddit.com/u/${account}`,
    icon: <></>,
  },
  tumblr: {
    url: (account) => `https://${account}.tumblr.com`,
    icon: <></>,
  },
  tiktok: {
    url: (account) => `https://tiktok.com/@${account}`,
    icon: <></>,
  },
};

export default platforms;
