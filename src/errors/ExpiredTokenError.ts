export class ExpiredTokenError extends Error {
  public type = ExpiredTokenError.name;
  constructor(message: string) {
    super(message);
  }
}
