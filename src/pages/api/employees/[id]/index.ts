import { NextApiRequest, NextApiResponse } from 'next';
// import { appAuth } from '../../../config/firebase';
// import { signInWithEmailAndPassword, getIdToken } from 'firebase/auth';
import { use } from 'next-api-middleware';
import { HttpErrorMiddleware } from '../../../../middlewares/HttpErrorMiddleware';
import { HttpMethodMiddleware } from '../../../../middlewares/HttpMethodMiddleware';
import { withApiSessionMiddleware } from '../../../../middlewares/ApiSessionMiddleware';
import { HttpValidationMiddleware } from '../../../../middlewares/HttpValidationMiddleware';
import { LoginBody } from '../../../../dto/loginBody.dto';
import { authenticate } from '../../../../services/authentication.service';
import { getEmployeeFromCompany } from '../../../../services/employee.service';

// const cookieExpirationDate = 1000 * 60 * 60 * 24 * 2;

// TODO Check with role
export const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const { id } = req.query;
  const { companyId, id: userId } = req.session.user;

  const user = await getEmployeeFromCompany(companyId, userId);

  return res.status(200).json(user);
};

export default withApiSessionMiddleware(use(HttpErrorMiddleware, HttpMethodMiddleware(['POST']))(handler));
