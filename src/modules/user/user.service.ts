import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor() {}
  public users: BehaviorSubject<Array<{ username: string; key: string }>> =
    new BehaviorSubject([]);

  insert(user: { username: string; key: string }) {
    const arr = this.users.getValue();
    const data = [...arr, user];
    this.users.next(data);
  }

  edit(user: { username: string; key: string }) {
    const arr = this.users.getValue();
    const index = arr.findIndex((us) => us.key === user.key);
    arr[index] = user;
    this.users.next(arr);
  }

  delete(user: any) {
    const arr = this.users.getValue();
    const index = arr.indexOf(user);
    arr.splice(index, 1);
    this.users.next(arr);
    // this.users
    //   .asObservable()
    //   .pipe(
    //     distinctUntilChanged(),
    //     tap((val) => {
    //       const index = val.indexOf(user);
    //       val.splice(index, 1);
    //       return val;
    //     })
    //   )
    //   .subscribe((data) => {
    //     this.users.next(data);
    //   })
    //   .unsubscribe();
  }
}
