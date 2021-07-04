import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

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
