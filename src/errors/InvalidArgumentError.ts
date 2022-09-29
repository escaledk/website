export class InvalidArgumentError extends Error {
  public type = InvalidArgumentError.name;
  constructor(message: string) {
    super(message);
  }
}
