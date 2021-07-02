import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'platzi-store';

  names = ['Christian', 'Felipe', 'Natalia'];

  power = 10;

  addItem() {
    this.names.push('Nuevo item');
  }

  deleteItem(index: number) {
    this.names.splice(index, 1);
  }

}
