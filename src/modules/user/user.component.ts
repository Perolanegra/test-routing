import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  textBtn = 'Add User';
  editBtn = 'Edit';
  users: Observable<Array<any>>;
  constructor(public uservice: UsersService) {
    console.log('now im on');
  }

  ngOnInit() {}

  delete(user: { username: string; key: string }): void {
    this.uservice.delete(user);
  }

  edit(user: { username: string; key: string }, inputEditUserValue): void {
    if (!inputEditUserValue) {
      this.editBtn = 'Confirm';
      (
        document.querySelector(`#inputEditUser_${user.key}`) as any
      ).style.display = 'block';
      console.log('user.key: ', user.key);
    } else {
      const newUser = user;
      newUser.username = inputEditUserValue;
      this.uservice.edit(newUser);
      (document.querySelector(`#inputEditUser_${user.key}`) as any).value = '';
      (
        document.querySelector(`#inputEditUser_${user.key}`) as any
      ).style.display = 'none';
      this.editBtn = 'Edit';
    }
  }

  add(value: string, submitTime: string): void {
    if (submitTime) {
      this.textBtn = 'Add User';
      (document.querySelector('#inputNewUser') as any).value = '';
      (document.querySelector('#inputNewUser') as any).style.display = 'none';
      const key = JSON.parse(localStorage.getItem('key')) + 1;
      localStorage.setItem('key', JSON.stringify(key));
      const user = { username: value, key };
      this.uservice.insert(user);
    } else {
      this.textBtn = 'Confirm';
      (document.querySelector('#inputNewUser') as any).style.display = 'block';
    }
  }
}
