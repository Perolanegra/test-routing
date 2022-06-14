import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  // todos os metodos p edit, att, inserir, retornar registros de funcionario

  constructor(private _angularFireDatabase: AngularFireDatabase) {}
  private users: BehaviorSubject<Array<{ username: string; key: string }>> =
    new BehaviorSubject(null);

  insert(user: { username: string; key: string }) {
    this.users.next([...this.users.getValue(), user]);
  }

  edit(user: { username: string; key: string }) {
    this.users
      .asObservable()
      .subscribe((val: Array<{ username: string; key: string }>) => {
        const index = val.findIndex((us) => us.key === user.key);
        val[index] = user;
        this.users.next(val);
      });
  }

  getAll() {
    // retornar lista de funcionários pra view
    // return this._angularFireDatabase.list('contato')
    //   .snapshotChanges()
    //   .pipe(
    //     map(changes => {
    //       return changes.map(data => ({ key: data.payload.key, ...data.payload.val() as {} }));
    //     })
    //   )
    this.users.asObservable();
  }

  delete(key: string) {
    this._angularFireDatabase.object(`contato/${key}`).remove();
  }
}
