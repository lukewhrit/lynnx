/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import { tw } from 'twind';
import Image from 'next/image';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import type { GetServerSideProps } from 'next';
import Layout from '../../components/layout';
import platforms from '../../lib/platforms';
import Icon from '../../components/icon';
import capitalize from '../../lib/capitalize';
import fetcher from '../../lib/fetcher';
import { User } from '../../lib/domain';

interface Props {
  user: User;
}

export const getServerSideProps: GetServerSideProps<{ user: User }> = async ({ req }) => {
  const user = await fetcher<User>(`http://${req.headers.host}/api/hello`);
  return { props: { user } };
};

export default function Profile({ user }: Props): JSX.Element {
  const { basePath } = useRouter();

  const { data, error } = useSWR<User>(`${basePath}/api/hello`, fetcher, {
    initialData: user,
  });

  if (error) return <div>failed to load...</div>;
  if (!data) return <div>loading...</div>;

  return (
    <Layout>
      <div className={tw`flex justify-center items-center py-6`}>
        <div className={tw`rounded shadow max-w-lg`}>
          <div className={tw`flex px-6 py-4 gap-4 rounded-t bg-gradient-to-r from-green-300 to-emerald-400`}>
            <Image
              src="https://pbs.twimg.com/profile_images/1332530978183634946/cpemve9y_400x400.jpg"
              width={72}
              height={72}
              className={tw`rounded-full w-8`}
            />
            <div>
              <h1 className={tw`font-semibold text-2xl`}>
                {data.nickname}
              </h1>
              <span className={tw`text-gray-700 text-sm`}>
                <code>
                  lynnx.me/u/
                  {data.name}
                </code>
              </span>
            </div>
          </div>
          <div className={tw`px-6 py-4`}>
            <p>{data.about}</p>
            <div className={tw`flex`}>
              {data.accounts.map(({ platform, account }) => {
                const { icon, url } = platforms[platform.toLowerCase()];

                return (
                  <div className={tw`mt-2`} key={platform}>
                    <Icon
                      icon={icon}
                      href={url(account)}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
