import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  users: Observable<any>;
  constructor() {
    console.log('now im on');
  }

  ngOnInit() {}

  delete(key: string) {
    // this._UsersService.delete(key);
  }

  edit(user: { username: string; key: string }) {
    // this._funcionarioDataService.obtemFuncionario(funcionario, key);
  }

  onSubmit() {
    // quando funcionário submeter o form
    // if (this.key){                 // se existir uma chave, funcionário ta editando
    //   this._funcionarioService.edit(this.funcionario, this.key)
    // } else {                       // Se não, ele ta inserino um novo usuário
    //   this._funcionarioService.insert(this.funcionario)
    // }
    // this.funcionario = new Funcionario() // reset funcionario p/ usuário inserir proximo
    // this.key = null                       //zerar chave tbm. Ao att pag infos zeradas
  }
}
