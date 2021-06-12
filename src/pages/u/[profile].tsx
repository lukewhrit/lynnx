/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import useSWR from 'swr';
import { useRouter } from 'next/router';
import type { GetServerSideProps } from 'next';
import Image from 'next/image';
import Layout from '../../components/layout';
import fetcher from '../../lib/fetcher';
import { Response, User } from '../../lib/domain';
import Button from '../../components/button';

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
      <main id="profile">
        <section id="banner">
          <div className="relative">
            <div className="h-32 bg-gray-800 w-full" />
            <div className="px-20 sm:px-4">
              <div className="flex justify-between">
                <Image
                  id="avatar"
                  className="rounded-full border-4 border-red-600"
                  src="https://pbs.twimg.com/profile_images/1385816384580558848/LJFOGqvj_400x400.jpg"
                  alt="Avatar"
                  layout="fixed"
                  width="115"
                  height="115"
                />
                <div>
                  <Button href="/">
                    Follow
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="main" className="flex justify-center py-10 px-20">
          User Information (Name, About, Socials, etc.) | Blog Post Feed
        </section>
      </main>
    </Layout>
  );
}
