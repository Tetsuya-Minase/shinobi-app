export class CustomError implements Error {
  public status: number;
  public message: string;
  public name: string;
  public stack: string;

  constructor(message: string, code: number) {
    this.message = message;
    this.status = code;
  }

  public toString() {
    return `${this.status}:${this.message}`;
  }

}
