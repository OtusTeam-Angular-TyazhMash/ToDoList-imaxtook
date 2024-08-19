import { Injectable } from '@angular/core';
import { ToastService } from 'src/app/shared/toasts/toast.service';
import { HttpClient } from "@angular/common/http";

export class Status {
  static ALL = null;
  static InProgress = "InProgress";
  static Complete = "Complete";
}

export class Item {
  id!: number;
  text!: string;
  description!: string;
  status!: Status;
}

@Injectable({
  providedIn: 'root'
})
export class ToDoListService {
  url: string = 'http://localhost:3000/tasks';
  itemList!: Item[];
  addText: string = '';
  editText: string = '';
  description: string = '';
  isLoading: boolean = true;
  selectedId!: number;
  editedId!: number;
  filterStatus: Status | null = Status.ALL;

  constructor(
    private toastService: ToastService,
    private httpClient: HttpClient
  ) {
    this.loadItemListFromServer();
  }

  getItem(id: number) {
    return this.itemList.find(item => item.id === id);
  }

  toDoFilter() {
    if (this.filterStatus == null) return this.itemList;

    return [...this.itemList].filter(
      item => item.status === this.filterStatus
    );
  }

  loadItemListFromServer() {
    this.isLoading = true;

    this.httpClient.get<Item[]>(this.url).subscribe({
      next: (items) => {
        this.itemList = items;
        setTimeout(() => this.isLoading = false, 200);
        this.toastService.showToast("Data received");
      }
    });
  }

  addItem(text: string, addDescription: string) {
    if (!text) return;

    this.httpClient.post(this.url, {
      text: text, 
      description: addDescription, 
      status: Status.InProgress
    }).subscribe({
      next: (item) => {
        this.itemList.push(item as Item);
        this.addText = '';
        this.description = '';
        this.toastService.showToast("Item added");
      }
    });
  }

  deleteItem(id: number) {
    this.httpClient.delete(this.url +'/'+ id).subscribe({
      next: () => {
        this.itemList = this.itemList.filter(it => it.id !== id);
        if (id == this.selectedId) this.selectedId = -1;
        this.toastService.showToast("Item deleted")
      } 
    });
  }

  editItem(text: string) {
    if (!text) return;

    this.httpClient.patch(this.url +'/'+ this.editedId, {text: text}).subscribe({
      next: () => {
        this.getItem(this.editedId)!.text = text;
        this.editedId = -1;
        this.toastService.showToast("Item edited")
      }
    });
  }

  setStatus(id: number) {
    var status = Status.InProgress;
    if (this.getItem(id)!.status === Status.InProgress) {
      status = Status.Complete;
    }
    this.httpClient.patch(this.url +'/'+ id, {status: status}).subscribe({
      next: () => {
        this.getItem(id)!.status = status;
      }
    });
  }

  setSelectedId(id: number) {
    if (this.editedId == id) {
      this.selectedId = -1;
    } else {
      this.selectedId = id;
      this.editedId = -1;
    }
  }

  setEditedItemId(id: number) {
    if (this.editedId == id) {
      this.editedId = -1;
    } else {
      this.editText = this.getItem(id)!.text;
      this.editedId = id;
      this.selectedId = -1;
    }
  }

  currentDescription() {
    if (this.selectedId == null) return "";
    if (this.selectedId < 0) return "";
    
    return this.getItem(this.selectedId)?.description;
  }
}
