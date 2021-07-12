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
import TraktIcon from '../components/icons/trakt';

interface Platforms {
  [key: string]: {
    url: (account: string) => string;
    icon: () => JSX.Element;
    name: string;
    color: string;
  };
}

const platforms: Platforms = {
  twitter: {
    url: (account) => `https://twitter.com/${account}`,
    icon: TwitterIcon,
    name: 'Twitter',
    color: '#1da1f2',
  },
  letterboxd: {
    url: (account) => `https://letterboxd.com/${account}`,
    icon: LetterboxdIcon,
    name: 'Letterboxd',
    color: '#00e054',
  },
  github: {
    url: (account) => `https://github.com/${account}`,
    icon: GithubIcon,
    name: 'GitHub',
    color: '#333333',
  },
  facebook: {
    url: (account) => `https://facebook.com/${account}`,
    icon: FacebookIcon,
    name: 'Facebook',
    color: '#1877f2',
  },
  youtube: {
    url: (account) => `https://youtube.com/${account}`,
    icon: YouTubeIcon,
    name: 'YouTube',
    color: '#ff0000',
  },
  instagram: {
    url: (account) => `https://instagram.com/${account}`,
    icon: InstagramIcon,
    name: 'Instagram',
    color: '#e4405f',
  },
  twitch: {
    url: (account) => `https://twitch.tv/${account}`,
    icon: TwitchIcon,
    name: 'Twitch',
    color: '#9146ff',
  },
  trakt: {
    url: (account) => `https://trakt.tv/${account}`,
    icon: TraktIcon,
    name: 'Trakt',
    color: '#ed2224',
  },
  // rateyourmusic: {
  //   url: (account) => `https://rateyourmusic.com/~${account}`,
  //   icon: RateYourMusicIcon,
  //   name: 'RateYourMusic',
  //   color: '#207bbf',
  // },
  // lastfm: {
  //   url: (account) => `https://last.fm/user/${account}`,
  //   icon: LastfmIcon,
  //   name: 'Last.fm',
  //   color: '#f71414',
  // },
  // reddit: {
  //   url: (account) => `https://reddit.com/u/${account}`,
  //   icon: RedditIcon,
  //   name: 'Reddit',
  //   color: '#ff4500',
  // },
  // tumblr: {
  //   url: (account) => `https://${account}.tumblr.com`,
  //   icon: TumblrIcon,
  //   name: 'Tumblr',
  //   color: '#36465d',
  // },
  // tiktok: {
  //   url: (account) => `https://tiktok.com/@${account}`,
  //   icon: TikTokIcon,
  //   name: 'TikTok',
  //   color: '#000000',
  // },
};

export default platforms;
