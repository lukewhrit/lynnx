/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../../lib/prisma';

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const { query: { id: username } } = req;

  switch (req.method) {
    case 'GET': {
      const {
        id, email, name, joinedOn, nickname, about, accounts,
      } = await prisma.user.findFirst({
        where: {
          name: username.toString(),
        },
      });

      res.status(200).json({
        id, email, name, joinedOn, nickname, about, accounts,
      });
      break;
    }
    default:
      res.status(400).end();
      break;
  }
};
