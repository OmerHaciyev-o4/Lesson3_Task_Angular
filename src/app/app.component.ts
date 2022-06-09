import { Component } from '@angular/core';
import { UserModel } from './model';
import { User } from './user';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  model: UserModel;
  public noRegisteredUser: User;

  constructor() {
    this.model = new UserModel();
    this.noRegisteredUser = new User();

    var users = JSON.parse(localStorage.getItem('users'));
    if (users != null) this.model.users = users;
  }

  checkBtn() {
    return {
      disabled:
        this.noRegisteredUser.name == '' ||
        this.noRegisteredUser.lastname == '' ||
        this.noRegisteredUser.age < 12 ||
        this.noRegisteredUser.age > 65 ||
        !this.checkHireDate(),
    };
  }

  checkHireDate() {
    if (
      this.noRegisteredUser.hireDate == null ||
      this.noRegisteredUser.hireDate == undefined ||
      this.noRegisteredUser.hireDate.toString() == ''
    ) {
      return false;
    }
    return true;
  }

  inputChk(value: string) {
    return {
      'input-success': value != '',
      'input-danger': value == '',
    };
  }

  register() {
    var newUser = new User();
    newUser.name = this.noRegisteredUser.name;
    newUser.lastname = this.noRegisteredUser.lastname;
    newUser.age = this.noRegisteredUser.age;
    newUser.hireDate = this.noRegisteredUser.hireDate;

    console.log(this.model.users);
    this.model.users.push(newUser);
    this.saveToDB();
    this.noRegisteredUser = new User();
  }

  saveToDB() {
    localStorage.setItem('users', JSON.stringify(this.model.users));
  }

  getUsers() {
    return this.model.users;
  }

  ChangeColor(body: any, trStyle: any) {
    for (let i = 0; i < body.children.length; i++) {
      let element = body.children[i];
      element.style.backgroundColor = 'white';
      element.style.color = 'black';
      element.style.cursor = 'pointer';
    }
    trStyle.backgroundColor = 'dodgerblue';
    trStyle.color = 'white';
    trStyle.cursor = 'context-menu';
  }
}
