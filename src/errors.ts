// This is our special type of Error that represents
// when a request got a 401 Unauthorized response
// interface IError {
//   name: string;
//   message: string;
//   response?: Response;
//   new (message: string): void;
// }

export class UnauthorizedError extends Error {
  public response: Response;
  constructor(message: string) {
    super(message);
    this.name = "UnauthorizedError";
    this.message = message;
  }
}
