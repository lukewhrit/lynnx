/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import Layout from '../../components/layout'
import { tw } from 'twind'
import { platforms } from '../../domain/platforms'
import Button from '../../components/button'
import { capitalize } from '../../domain/capitalize'
import Image from 'next/image'

const testData = {
  id: 'f12c31b6-dedc-45d7-80ce-926fda03cb48',
  name: 'luke',
  email: 'lukewhrit@pm.me',
  password: '',
  joinDate: new Date(),
  profile: {
    nickname: 'Luke',
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam velit felis, convallis eu elit nec, lacinia varius magna.',
    borderColor: 'emerald',
    accounts: [
      { platform: 'twitter', account: 'luke_324' },
      { platform: 'github', account: 'lukewhrit' }
    ]
  },
}

export default function Profile () {
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
                {testData.profile.nickname}
              </p>
              <span className={tw`text-gray-600 text-sm`}>
                <code>lynnx.me/u/{testData.name}</code>
              </span>
              <p>{testData.profile.about}</p>
            </div>
          </div>
          <div className={tw`gap-2`}>
            {testData.profile.accounts.map(({ platform }) => {
              return (
                <div className={tw`mt-2`}>
                  <Button
                    name={capitalize(platform)}
                    color={platforms[platform].color}
                    icon={<></>}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </Layout>
  )
}
