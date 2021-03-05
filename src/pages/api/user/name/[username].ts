/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../../lib/prisma';

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const { query: { username } } = req;

  switch (req.method) {
    case 'GET': {
      const user = await prisma.user.findFirst({
        where: {
          name: username as string,
        },
      });

      if (user !== null) {
        res.status(200).json({
          type: 'user',
          payload: {
            id: user.id,
            email: user.email,
            name: user.name,
            joinedOn: user.joinedOn,
            nickname: user.nickname,
            about: user.about,
            accounts: user.accounts,
          },
        });
      } else {
        res.status(404).json({
          type: 'error',
          payload: {
            message: 'User was not found.',
          },
        });
      }

      break;
    }
    default:
      res.status(400).end();
      break;
  }
};
