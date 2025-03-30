export class Constants {
  // TODO: fix problem with env variables, they are not being loaded
  static readonly JWT_SECRET = process.env.JWT_SECRET ?? '';
}
