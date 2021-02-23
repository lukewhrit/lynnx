/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../../lib/prisma';

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const { query: { id: userID } } = req;

  switch (req.method) {
    case 'GET': {
      const {
        id, email, name, joinedOn, nickname, about, accounts,
      } = await prisma.user.findFirst({
        where: {
          id: userID.toString(),
        },
      });

      res.status(200).json({
        id, email, name, joinedOn, nickname, about, accounts,
      });
      break;
    }
    case 'PUT':
      res.status(501).end();
      break;
    case 'DELETE':
      res.status(501).end();
      break;
    default:
      res.status(400).end();
      break;
  }
};
