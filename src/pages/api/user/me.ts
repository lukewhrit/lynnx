/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  if (req.method === 'GET') {
    const user = await prisma.user.findFirst({
      where: {
        email: 'lukewhrit@pm.me',
      },
      include: {
        posts: true,
      },
    });

    res.status(200).json({
      type: 'user',
      payload: user,
    });
  } else {
    res.status(400).end();
  }
};
