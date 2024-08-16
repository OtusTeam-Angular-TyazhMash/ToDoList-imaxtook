import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})

export class ListItemComponent implements OnInit {
  @Input() itemList!: {id: number, text: string}[];
  @Output() itemListChange = new EventEmitter();
  isLoading: boolean = true;

  deleteItem(id: number) {
    this.itemList.splice(this.itemList.findIndex(it => it.id === id), 1);
    this.itemListChange.emit(this.itemList);
  }

  ngOnInit(): void {
    setTimeout(() => this.isLoading = false, 500);
  }
}