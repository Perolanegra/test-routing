import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  constructor() {
    this.setFirstKeyStorage();
  }

  setFirstKeyStorage(): void {
    if (!localStorage.getItem('key')) {
      localStorage.setItem('key', '0');
    }
  }
}
