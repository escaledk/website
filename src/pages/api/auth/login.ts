import { NextApiRequest, NextApiResponse } from 'next';
import { adminAuth } from '../../../config/firebase/admin';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../config/firebase/app';
import { use } from 'next-api-middleware';
import { AuthenticationMiddleware } from '../../../middlewares/AuthenticationMiddleware';
import { HttpErrorMiddleware } from '../../../middlewares/HttpErrorMiddleware';
import { HttpMethodMiddleware } from '../../../middlewares/HttpMethodMiddleware';
import { withApiSessionMiddleware } from '../../../middlewares/ApiSessionMiddleware';
import { HttpValidationMiddleware } from '../../../middlewares/HttpValidationMiddleware';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

// const cookieExpirationDate = 1000 * 60 * 60 * 24 * 2;

export const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const { email, password } = req.body;

  const user = await signInWithEmailAndPassword(auth, email, password);

  console.log(user);

  // const cookie = await adminAuth.createSessionCookie(idToken, { expiresIn: cookieExpirationDate });

  // res.setHeader('set-cookie', `authCookie=${cookie}; path=/; samesite=lax; httponly;`);

  res.status(200).end();
};

class ValidationBody {
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}

export default withApiSessionMiddleware(use(HttpErrorMiddleware, HttpMethodMiddleware(['POST']), HttpValidationMiddleware(ValidationBody))(handler));
