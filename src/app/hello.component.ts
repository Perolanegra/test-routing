import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello sir!</h1>
  
    <a type="submit" [routerLink]="'/user'">Go to user page!</a>
  `,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent {
  @Input() name: string;

  constructor() {
    console.log('i was born');
  }
}
