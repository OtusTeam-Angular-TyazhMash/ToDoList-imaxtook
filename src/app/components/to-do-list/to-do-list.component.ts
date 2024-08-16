import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class ToDoListComponent {
  text: string = '';

  itemList: {id: number, text: string}[] = [
    {id: 0, text: 'Buy a new gaming laptop'},
    {id: 1, text: 'Complete previous task'},
    {id: 2, text: 'Create some angular app'}
  ];

  addItem(addText: string) {
    if (!addText) return;

    this.itemList.push({
      id: Math.max(...this.itemList.map(it => it.id)) + 1,
      text: addText
    });
    this.text = '';
  }
}
