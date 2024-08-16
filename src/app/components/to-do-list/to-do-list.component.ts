import { Component, ViewEncapsulation } from '@angular/core';
import { ToDoListService } from './to-do-list.service';
import { ToastService } from 'src/app/shared/toasts/toast.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class ToDoListComponent {
  itemList: Map<number, {text: string, description: string}>;
  text: string = '';
  description: string = '';

  constructor(
    private toDoListService: ToDoListService,
    private toastService: ToastService
  ) {
    this.itemList = toDoListService.getItemList;
  }

  addItem(text: string, addDescription: string) {
    if (!text) return;

    this.itemList.set(
      Math.max(...this.itemList.keys(), -1) + 1,
      {
        text: text,
        description: addDescription
      }
    );
    this.text = '';
    this.description = '';

    this.toastService.showToast("Item added");
  }
}
