export class InvalidHttpMethodError extends Error {
  public type = InvalidHttpMethodError.name;
  constructor(message: string) {
    super(message);
  }
}
