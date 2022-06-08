import { User } from './user';

export class UserModel {
  users: User[];

  constructor() {
    this.users = new Array<User>();
  }
}
