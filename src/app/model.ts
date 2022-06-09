import { User } from './user';

export class UserModel {
  users: Array<User>;

  constructor() {
    this.users = new Array<User>();
  }
}
