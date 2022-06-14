import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor() {}
  private users: BehaviorSubject<Array<{ username: string; key: string }>> =
    new BehaviorSubject([]);

  insert(user: { username: string; key: string }) {
    const arr = this.users.getValue();
    this.users.next([...arr, user]);
  }

  edit(user: { username: string; key: string }) {
    this.users
      .asObservable()
      .subscribe((val: Array<{ username: string; key: string }>) => {
        const index = val.findIndex((us) => us.key === user.key);
        val[index] = user;
        this.users.next(val);
      })
      .unsubscribe();
  }

  getAll(): Observable<any> {
    return this.users.asObservable();
  }

  delete(user: any) {
    this.users
      .asObservable()
      .subscribe((val) => {
        const index = val.indexOf(user);
        val.splice(index, 1);
        this.users.next(val);
      })
      .unsubscribe();
  }
}
