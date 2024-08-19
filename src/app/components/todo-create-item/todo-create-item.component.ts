import { Component } from '@angular/core';
import { ToDoListService } from '../to-do-list/to-do-list.service';

@Component({
  selector: 'app-todo-create-item',
  templateUrl: './todo-create-item.component.html',
  styleUrls: ['./todo-create-item.component.scss']
})
export class TodoCreateItemComponent {
  constructor(protected toDoListService: ToDoListService) {}
}
