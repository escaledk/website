import { IsEmail } from 'class-validator';
import { NextApiRequest, NextApiResponse } from 'next';
import { label, use } from 'next-api-middleware';
import { HttpErrorMiddleware } from '../../../middlewares/HttpErrorMiddleware';
import { HttpMethodMiddleware } from '../../../middlewares/HttpMethodMiddleware';
import { withApiSessionMiddleware } from '../../../middlewares/ApiSessionMiddleware';

export const handler = (req: NextApiRequest, res: NextApiResponse) => {
  return res.status(200).json({ name: 'John Doe' });
};

const withMiddleware = use(HttpErrorMiddleware, HttpMethodMiddleware(['POST']));
export default withApiSessionMiddleware(withMiddleware(handler));
