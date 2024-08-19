import { Component, OnChanges, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { ToDoListService } from './to-do-list.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class ToDoListComponent {
  constructor(protected dataService: ToDoListService) { }
}
