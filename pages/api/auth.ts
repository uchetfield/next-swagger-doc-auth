import { NextApiRequest, NextApiResponse } from 'next';

/**
 * @swagger
 * /api/auth:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     description: Returns the hello world with auth
 *     responses:
 *       200:
 *         description: hello world
 */
const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({
    result: 'hello world',
  });
};

export default handler;
