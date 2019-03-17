export class CustomError implements Error {
  public name = 'custom error';
  public message: string;
  public status: number;

  constructor(message: string, code: number) {
    this.message = message;
    this.status = code;
  }

  public toString() {
    return `${this.status}:${this.message}`;
  }
}
