import { ValidationError } from 'class-validator';
import { IHttpErrorResponse } from '../../interfaces/IHttpError';

// TODO: only return stackTrace when in debug mode
export const transformToHttpError = (type = 'InternalServerError', message: string, stackTrace?: string): IHttpErrorResponse => {
  return {
    errors: [{ type, message, stackTrace }],
  };
};

export const transformValidationError = (validationErrors: Array<ValidationError>) => {
  return validationErrors.reduce((result, err: ValidationError): IHttpErrorResponse[] => {
    Object.entries(err.constraints!).map(([_, value]) => {
      result.push(transformToHttpError('ValidationError', value));
    });
    return result;
  }, [] as IHttpErrorResponse[]);
};
