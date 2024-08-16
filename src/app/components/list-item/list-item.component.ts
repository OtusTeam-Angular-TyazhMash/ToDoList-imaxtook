import { Component, OnInit } from '@angular/core';
import { ToDoListService } from '../to-do-list/to-do-list.service';
import { ToastService } from 'src/app/shared/toasts/toast.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})

export class ListItemComponent implements OnInit {
  itemList!: Map<number, {text: string, description: string}>;
  isLoading: boolean = true;
  selectedItemId!: number;
  editedITemId!: number;
  text!: string;
  description!: string;

  constructor(
    private toDoListService: ToDoListService,
    private toastService: ToastService
  ) {
    this.itemList = toDoListService.getItemList;
  }
  
  deleteItem(id: number) {
    this.itemList.delete(id);
    if (id == this.selectedItemId) {
      this.selectedItemId = -1;
    }

    this.toastService.showToast("Item deleted")
  }

  saveItem(text: string) {
    if (!text) return;

    this.itemList.get(this.editedITemId)!.text = text;
    this.editedITemId = -1;

    this.toastService.showToast("Item saved")
  }

  setSelectedId(id: number) {
    if (this.editedITemId == id) {
      this.selectedItemId = -1;
    } else {
      this.selectedItemId = id;
      this.editedITemId = -1;
    }
  }

  setEditedItemId(id: number) {
    if (this.editedITemId == id) {
      this.editedITemId = -1;
    } else {
      this.text = this.itemList.get(id)!.text;
      this.editedITemId = id;
      this.selectedItemId = -1;
    }
  }

  currentDescription() {
    if (this.selectedItemId == null) return "";
    if (this.selectedItemId < 0) return "";
    
    return this.itemList.get(this.selectedItemId)?.description;
  }

  ngOnInit(): void {
    setTimeout(() => this.isLoading = false, 500);
  }
}