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
  users: Observable<Array<any>> = this.usersService.getAll();
  constructor(private usersService: UsersService) {
    console.log('now im on');
  }

  ngOnInit() {}

  delete(user: { username: string; key: string }): void {
    this.usersService.delete(user);
  }

  edit(user: { username: string; key: string }, inputEditUserValue): void {
    if (!inputEditUserValue) {
      this.editBtn = 'Confirm';
      (document.querySelector('#inputEditUser') as any).style.display = 'block';
    } else {
      const newUser = user;
      newUser.username = inputEditUserValue;
      this.usersService.edit(newUser);
      (document.querySelector('#inputEditUser') as any).value = '';
      (document.querySelector('#inputEditUser') as any).style.display = 'none';
      this.editBtn = 'Edit';
    }
  }

  add(value: string, submitTime: string): void {
    if (submitTime) {
      this.textBtn = 'Add User';
      (document.querySelector('#inputNewUser') as any).value = '';
      const key = JSON.parse(localStorage.getItem('key')) + 1;
      localStorage.setItem('key', JSON.stringify(key));
      const user = { username: value, key };
      this.usersService.insert(user);
    } else {
      this.textBtn = 'Confirm';
    }
  }
}
