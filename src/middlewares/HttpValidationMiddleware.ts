import { Middleware } from 'next-api-middleware';
import { validate } from 'class-validator';

export const HttpValidationMiddleware =
  (ValidationClass: any): Middleware =>
  async (req, res, next) => {
    const validationClass = new ValidationClass();

    const { body } = req.body;
    Object.entries(body).map(([key, value]) => {
      validationClass[key] = value;
    });

    const validationErrors = await validate(validationClass, {
      validationError: { target: false, value: false, children: false },
    });

    // if (validationErrors.length > 0) {
    //   throw validationErrors;
    // }

    await next();
  };
