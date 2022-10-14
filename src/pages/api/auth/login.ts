import { NextApiRequest, NextApiResponse } from 'next';
import { appAuth } from '../../../config/firebase';
import { signInWithEmailAndPassword, getIdToken } from 'firebase/auth';
import { use } from 'next-api-middleware';
import { HttpErrorMiddleware } from '../../../middlewares/HttpErrorMiddleware';
import { HttpMethodMiddleware } from '../../../middlewares/HttpMethodMiddleware';
import { withApiSessionMiddleware } from '../../../middlewares/ApiSessionMiddleware';
import { HttpValidationMiddleware } from '../../../middlewares/HttpValidationMiddleware';
import { LoginBody } from '../../../dto/loginBody.dto';

// const cookieExpirationDate = 1000 * 60 * 60 * 24 * 2;

export const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const { email, password } = req.body as LoginBody;

  const { user } = await signInWithEmailAndPassword(appAuth, email, password);
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
