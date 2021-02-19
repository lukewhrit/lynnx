/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import { Prisma } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../lib/prisma';

interface Data {
  id: string;
  email: string;
  name: string;
  joinedOn: Date;
  nickname: string;
  about: string;
  accounts: Prisma.JsonValue;
  password: string;
}

export default async (req: NextApiRequest, res: NextApiResponse<Data>): Promise<void> => {
  if (req.method === 'GET') {
    // await prisma.user.update({
    //   where: {
    //     email: 'lukewhrit@pm.me',
    //   },
    //   data: {
    //     accounts: [
    //       {
    //         platform: 'Twitter',
    //         account: 'luke_324',
    //       },
    //     ],
    //   },
    // });

    const user = await prisma.user.findFirst({
      where: {
        email: 'lukewhrit@pm.me',
      },
    });

    res.status(200).json({ ...user });
  } else {
    res.status(400);
  }
};
