import { ValidationError } from 'class-validator';
import { Middleware } from 'next-api-middleware';
import { InvalidHttpMethodError } from '../errors/InvalidHttpMethodError';
import { transformErrorObject, transformValidationError } from '../services/transformers/httpErrorTransformer';

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

    const error = e as Error;
    return res.status(500).json({ errors: [transformErrorObject('InternalServerError', error.message, error.stack)] });
  }
};
