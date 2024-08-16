import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class ToDoListComponent {
  text: string = '';
  description: string = '';

  itemList: Map<number, {text: string, description: string}> = new Map();

  addItem(addText: string, addDescription: string) {
    /* Без проверки на пустоту, при быстрых кликах нижнего
       Delete > Add Task иногда добавлялся пустой элемент. */
    if (!addText) return;

    this.itemList.set(
      Math.max(...this.itemList.keys(), -1) + 1,
      {
        text: addText,
        description: addDescription
      }
    );
    this.text = '';
    this.description = '';
  }

  constructor() {
    this.itemList.set(0, {text: 'Buy a new gaming laptop', description: 'Description 1'});
    this.itemList.set(1, {text: 'Complete previous task', description: 'Description 2'});
    this.itemList.set(2, {text: 'Create some angular app', description: 'Description 3'});
  }
}
