import { Component } from '@angular/core';
import { Item, ToDoListService } from '../to-do-list/to-do-list.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-to-do-item-view',
  templateUrl: './to-do-item-view.component.html',
  styleUrls: ['./to-do-item-view.component.scss']
})
export class ToDoItemViewComponent {
  constructor(
    protected dataService: ToDoListService,
    protected activatedRoute: ActivatedRoute
  ) {}

  activatedItem() {
    try {
      return this.dataService.getItem(
        +this.activatedRoute.snapshot.children[0]?.params['id']
      );
    } catch {}
    return { description: "" } as Item;
  }
}
