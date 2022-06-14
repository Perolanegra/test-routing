import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  distinctUntilChanged,
  Observable,
  switchMap,
} from 'rxjs';
import { tap } from 'rxjs/operators';

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
    this.users
      .asObservable()
      .pipe(
        distinctUntilChanged(),
        tap((val) => {
          const index = val.findIndex((us) => us.key === user.key);
          val[index] = user;
          return val;
        })
      )
      .subscribe((data: Array<{ username: string; key: string }>) => {
        this.users.next(data);
      })
      .unsubscribe();
  }

  // getAll(): Observable<any> {
  //   return this.users.asObservable();
  //   // .pipe(
  //   //   distinctUntilChanged(),
  //   //   switchMap((val) => val)
  //   // );
  // }

  delete(user: any) {
    this.users
      .asObservable()
      .pipe(
        distinctUntilChanged(),
        tap((val) => {
          const index = val.indexOf(user);
          val.splice(index, 1);
          return val;
        })
      )
      .subscribe((data) => {
        this.users.next(data);
      })
      .unsubscribe();
  }
}
