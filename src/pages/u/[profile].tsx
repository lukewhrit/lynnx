/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import useSWR from 'swr';
import { useRouter } from 'next/router';
import type { GetServerSideProps } from 'next';
import Image from 'next/image';
import { AtSymbolIcon, CalendarIcon, LocationMarkerIcon } from '@heroicons/react/outline';
import Layout from '../../components/layout';
import fetcher from '../../lib/fetcher';
import { Response, User } from '../../lib/domain';
import platforms from '../../lib/platforms';

// Fetch user information from local API routes on server-side
export const getServerSideProps: GetServerSideProps<{
  user: Response<User>
}> = async ({ req, params }) => {
  const user = await fetcher<Response<User>>(`http://${req.headers.host}/api/user/name/${params.profile}`);
  return { props: { user } };
};

export default function Profile({ user }: { user: Response<User> }): JSX.Element {
  const { basePath } = useRouter();

  const { data, error } = useSWR<Response<User>>(`${basePath}/api/user/name/${user.payload.name}`, fetcher, {
    initialData: user,
  });

  if (error) return <div>failed to load...</div>;
  if (!data) return <div>loading...</div>;
  if (data.type === 'error') {
    return <div>{data.payload.message}</div>;
  }

  return (
    <Layout>
      <main id="profile" className="flex justify-center py-10 px-36">
        <div>
          <section id="banner" className="flex items-center gap-4">
            <div>
              <Image
                id="avatar"
                className="rounded-full border-2 border-rose-600"
                src="https://pbs.twimg.com/profile_images/1414290167318319104/WmGusiyZ_400x400.jpg"
                alt="Avatar"
                layout="fixed"
                width="115"
                height="115"
              />
            </div>
            <div>
              <p className="text-2xl font-bold mb-2">{data.payload.nickname}</p>
              <div className="flex items-center gap-3">
                <span className="flex gap-1 items-center">
                  <AtSymbolIcon className="h-5 w-5" />
                  {data.payload.name}
                </span>
                <span className="flex gap-1 items-center">
                  <LocationMarkerIcon className="h-5 w-5" />
                  {data.payload.location}
                </span>
                <span className="flex gap-1 items-center">
                  <CalendarIcon className="h-5 w-5" />
                  Joined
                  {' '}
                  {'Feburary' || new Date(data.payload.joinedOn).getUTCMonth()}
                  {' '}
                  {new Date(data.payload.joinedOn).getFullYear()}
                </span>
              </div>
            </div>
          </section>
          <hr className="my-5 max-w-7xl px-2 mx-auto" />
          <section id="main" className="grid gap-12 grid-cols-8">
            <div className="col-span-3">
              <section id="about">
                <p className="text-xl font-bold mb-3">
                  About
                  {' '}
                  {data.payload.nickname}
                </p>
                <p className="w-5/7">
                  {data.payload.about}
                </p>
              </section>
              <section id="pronouns" className="mt-6 flex justify-between">
                <p className="font-bold">Pronouns</p>
                <p>{data.payload.pronouns.join('/')}</p>
              </section>
              <section id="age" className="mt-2 flex justify-between">
                <p className="font-bold">Age</p>
                <p>{data.payload.age.toString()}</p>
              </section>
              <section id="gender" className="mt-2 flex justify-between">
                <p className="font-bold">Gender</p>
                <p>{data.payload.gender}</p>
              </section>
              <section id="sexuality" className="mt-2 flex justify-between">
                <p className="font-bold">Sexuality</p>
                <p>{data.payload.sexuality}</p>
              </section>
              <section id="socials" className="mt-6 flex gap-2 justify-center items-center">
                {data.payload.accounts.map((account) => {
                  const platform = platforms[account.platform.toLowerCase()];

                  return (
                    <div key={account.platform.toLowerCase()}>
                      <a href={platform.url(account.account)} target="_blank" rel="noreferrer noopener">
                        <div
                          className="w-8 h-8 rounded-full p-2 cursor-pointer"
                          style={{ backgroundColor: platform.color }}
                        >
                          <platform.icon />
                        </div>
                      </a>
                    </div>
                  );
                })}
              </section>
            </div>
            <div className="col-span-5">
              <p className="text-xl font-bold mb-3">Blog Posts</p>
              <div className="mb-4 border-2 p-2 border-gray-600">
                <div className="flex justify-between">
                  <p className="text-emerald-500 text-lg hover:underline cursor-pointer">
                    Lorem ipsum dolor sit amet
                  </p>
                  <p>
                    08 Jun 21
                  </p>
                </div>
                <p className="mt-1 flex gap-1 text-gray-600 text-sm">
                  <span className="hover:underline cursor-pointer">#programming</span>
                  <span className="hover:underline cursor-pointer">#learning</span>
                </p>
              </div>
              <div className="border-2 p-2 border-gray-600">
                <div className="flex justify-between">
                  <p className="text-emerald-500 text-lg hover:underline cursor-pointer">
                    Consectetur adipiscing elit
                  </p>
                  <p>
                    13 May 21
                  </p>
                </div>
                <p className="mt-1 flex gap-1 text-gray-600 text-sm">
                  <span className="hover:underline cursor-pointer">#music</span>
                </p>
              </div>
              <p className="mt-2 float-right text-emerald-500 cursor-pointer hover:underline">
                Subscribe via RSS
              </p>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}
