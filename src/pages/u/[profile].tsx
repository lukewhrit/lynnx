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
import fetcher from '../../lib/fetcher';
import { Response, User } from '../../lib/domain';

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
      <div>
        <Image
          src="https://pbs.twimg.com/profile_banners/1215546417936314369/1607498953/1500x500"
          layout="responsive"
          width={1300}
          height={400}
        />
        <div className={tw`flex justify-center md:pl-8 md:justify-left`}>
          <section className={tw`relative mt-3 xs:bottom-8 max-w-sm md:max-w-lg`}>
            <div className={tw`flex gap-4 mb-3 bg-black py-2.5 px-3 shadow items-center`}>
              <Image
                src="https://pbs.twimg.com/profile_images/1375990292961198081/3loVJ9l4_400x400.jpg"
                width={75}
                height={75}
                className={tw`rounded-full`}
              />
              <div>
                <h1 className={tw`text-white font-semibold text-xl md:text-2xl`}>
                  {data.payload.nickname}
                </h1>
                <span className={tw`text-gray-200 text-sm`}>
                  <code>
                    lynnx.me/u/
                    {data.payload.name}
                  </code>
                </span>
              </div>
            </div>
            <div>
              <p>{data.payload.about}</p>
              <div className={tw`flex`}>
                {data.payload.accounts.map(({ platform, account }) => {
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
          </section>
        </div>
      </div>
    </Layout>
  );
}
