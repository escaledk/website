export class InvalidTokenError extends Error {
  public type = InvalidTokenError.name;
  constructor(message: string) {
    super(message);
  }
}
