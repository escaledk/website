export class HttpValidationError extends Error {
  public type = HttpValidationError.name;
  constructor(message: string) {
    super(message);
  }
}
