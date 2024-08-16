import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToDoListService {
  private itemList: Map<number, {text: string, description: string}> = new Map();

  constructor() {
    this.itemList.set(0, {text: 'Buy a new gaming laptop', description: 'Description 1'});
    this.itemList.set(1, {text: 'Complete previous task', description: 'Description 2'});
    this.itemList.set(2, {text: 'Create some angular app', description: 'Description 3'});
  }

  get getItemList() {
    return this.itemList;
  }
}
