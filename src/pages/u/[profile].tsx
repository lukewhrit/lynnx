/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import { tw } from 'twind';
import Image from 'next/image';
import useSWR from 'swr';
import Layout from '../../components/layout';
import platforms from '../../lib/platforms';
import Button from '../../components/button';
import capitalize from '../../lib/capitalize';
import fetcher from '../../lib/fetcher';
import { User } from '../../lib/domain';

interface Props {
  user: User;
}

export async function getServerSideProps(): Promise<{ props: Props }> {
  const user = await fetcher<User>('http://localhost:3000/api/hello');
  return { props: { user } };
}

export default function Profile({ user }: Props): JSX.Element {
  const { data, error } = useSWR<User>('http://localhost:3000/api/hello', fetcher, {
    initialData: user,
  });

  if (error) return <div>failed to load...</div>;
  if (!data) return <div>loading...</div>;

  return (
    <Layout>
      <div className={tw`flex justify-center items-center py-6`}>
        <div className={tw`px-6 py-4 max-w-xl`}>
          <div className={tw`flex gap-4 mb-4`}>
            <div>
              <Image
                src="https://pbs.twimg.com/profile_images/1332530978183634946/cpemve9y_400x400.jpg"
                width={180}
                height={180}
                className={tw`rounded-full`}
              />
            </div>
            <div>
              <p className={tw`font-semibold text-2xl`}>
                {data.nickname}
              </p>
              <span className={tw`text-gray-600 text-sm`}>
                <code>
                  lynnx.me/u/
                  {data.name}
                </code>
              </span>
              <p>{data.about}</p>
            </div>
          </div>
          <div className={tw`gap-2`}>
            {data.accounts.map(({ platform }) => (
              <div className={tw`mt-2`} key={platform}>
                <Button
                  name={capitalize(platform)}
                  color={platforms[platform.toLowerCase()].color}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
