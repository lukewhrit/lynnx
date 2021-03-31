/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/

import TwitterIcon from '../components/icons/twitter';
import LetterboxdIcon from '../components/icons/letterboxd';
import GithubIcon from '../components/icons/github';
import FacebookIcon from '../components/icons/facebook';
import YouTubeIcon from '../components/icons/youtube';
import InstagramIcon from '../components/icons/instagram';
import TwitchIcon from '../components/icons/twitch';

interface Platforms {
  [key: string]: {
    url: (account: string) => string;
    icon: JSX.Element;
    name: string;
    color: string;
  };
}

const platforms: Platforms = {
  twitter: {
    url: (account) => `https://twitter.com/${account}`,
    icon: <TwitterIcon />,
    name: 'Twitter',
    color: '#1DA1F2',
  },
  letterboxd: {
    url: (account) => `https://letterboxd.com/${account}`,
    icon: <LetterboxdIcon />,
    name: 'Letterboxd',
    color: '#00D735',
  },
  github: {
    url: (account) => `https://github.com/${account}`,
    icon: <GithubIcon />,
    name: 'GitHub',
    color: '#181717',
  },
  facebook: {
    url: (account) => `https://facebook.com/${account}`,
    icon: <FacebookIcon />,
    name: 'Facebook',
    color: '#1877F2',
  },
  youtube: {
    url: (account) => `https://youtube.com/${account}`,
    icon: <YouTubeIcon />,
    name: 'YouTube',
    color: '#FF0000',
  },
  instagram: {
    url: (account) => `https://instagram.com/${account}`,
    icon: <InstagramIcon />,
    name: 'Instagram',
    color: '#E4405F',
  },
  twitch: {
    url: (account) => `https://twitch.tv/${account}`,
    icon: <TwitchIcon />,
    name: 'Twitch',
    color: '#9146FF',
  },
  reddit: {
    url: (account) => `https://reddit.com/u/${account}`,
    icon: <></>,
    name: 'Reddit',
    color: '#FF4500',
  },
  tumblr: {
    url: (account) => `https://${account}.tumblr.com`,
    icon: <></>,
    name: 'Tumblr',
    color: '#36465D',
  },
  tiktok: {
    url: (account) => `https://tiktok.com/@${account}`,
    icon: <></>,
    name: 'TikTok',
    color: '#000000',
  },
};

export default platforms;
