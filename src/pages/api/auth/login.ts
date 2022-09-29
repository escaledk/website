import { NextApiRequest, NextApiResponse } from 'next';
import { adminAuth } from '../../../services/firebase/admin';
import { use } from 'next-api-middleware';
import { AuthenticationMiddleware } from '../../../middlewares/AuthenticationMiddleware';
import { HttpErrorMiddleware } from '../../../middlewares/HttpErrorMiddleware';
import { HttpMethodMiddleware } from '../../../middlewares/HttpMethodMiddleware';
import { withApiSessionMiddleware } from '../../../middlewares/ApiSessionMiddleware';

const cookieExpirationDate = 1000 * 60 * 60 * 24 * 2;

export const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const idToken = req.headers.authorization?.replace('Bearer', '')!;

  const cookie = await adminAuth.createSessionCookie(idToken, { expiresIn: cookieExpirationDate });

  res.setHeader('set-cookie', `authCookie=${cookie}; path=/; samesite=lax; httponly;`);

  res.status(200).end();
};

export default withApiSessionMiddleware(use(HttpErrorMiddleware, HttpMethodMiddleware(['POST']), AuthenticationMiddleware)(handler));
