import { NextApiRequest, NextApiResponse } from 'next';
import { adminAuth } from '../../../config/firebase/admin';
import { signInWithEmailAndPassword, getIdToken } from 'firebase/auth';
import { auth } from '../../../config/firebase/app';
import { use } from 'next-api-middleware';
import { HttpErrorMiddleware } from '../../../middlewares/HttpErrorMiddleware';
import { HttpMethodMiddleware } from '../../../middlewares/HttpMethodMiddleware';
import { withApiSessionMiddleware } from '../../../middlewares/ApiSessionMiddleware';
import { HttpValidationMiddleware } from '../../../middlewares/HttpValidationMiddleware';
import { LoginBody } from '../../../dto/loginBody.dto';
import { IUser } from '../../../interfaces/IUser';

// const cookieExpirationDate = 1000 * 60 * 60 * 24 * 2;

export const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const { email, password } = req.body as LoginBody;

  const { user } = await signInWithEmailAndPassword(auth, email, password);
  const idToken = await getIdToken(user, false);

  req.session.user = {
    id: user.uid,
    email: user.email!,
    firstname: user.displayName!,
    phone: user.phoneNumber!,
  };
  req.session.auth = {
    accessToken: (user as any).accessToken,
    idToken,
  };

  await req.session.save();

  res.redirect(301, '/');
};

export default withApiSessionMiddleware(use(HttpErrorMiddleware, HttpMethodMiddleware(['POST']), HttpValidationMiddleware(LoginBody))(handler));
