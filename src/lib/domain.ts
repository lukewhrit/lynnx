/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

export interface Error {
  message: string;
}

export interface Post {
  id: string;
  authorID: string;
  title: string;
  content: string;
  postedDate: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  joinedOn: string;
  nickname: string;
  about: string;
  tagline: string;
  accounts: {
    account: string;
    platform: string;
  }[];
  posts: Post[];
  password: string;
}

export interface Response<T> {
  type: 'error' | 'user';
  payload: T & Error;
}
