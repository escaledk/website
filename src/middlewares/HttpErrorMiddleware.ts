import { ValidationError } from 'class-validator';
import { FirebaseError } from 'firebase/app';
import { Middleware } from 'next-api-middleware';
import { InvalidHttpMethodError } from '../errors/InvalidHttpMethodError';
import { transformErrorObject, transformValidationError } from '../services/transformers/httpErrorTransformer';

const unAuthorized = ['auth/user-not-found'];

export const HttpErrorMiddleware: Middleware = async (req, res, next) => {
  try {
    await next();
  } catch (e) {
    if (e instanceof InvalidHttpMethodError) {
      return res.status(405).json({ errors: [transformErrorObject(e.type, e.message, e.stack)] });
    }

    if (e instanceof Array<ValidationError>) {
      return res.status(400).json({ errors: transformValidationError(e) });
    }

    const error = e as FirebaseError;
    if (unAuthorized.includes(error.code)) {
      return res.status(401).json({ errors: [transformErrorObject(error.code, error.message, error.stack)] });
    }

    return res.status(500).json({ errors: [transformErrorObject('InternalServerError', error.message, error.stack)] });
  }
};
