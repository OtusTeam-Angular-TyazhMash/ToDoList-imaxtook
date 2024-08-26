import { Component } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { translations } from 'src/locale/translations';

@Component({
  selector: 'app-todo-create-item',
  templateUrl: './todo-create-item.component.html',
  styleUrls: ['./todo-create-item.component.scss']
})
export class TodoCreateItemComponent {
  readonly translations = translations;
  constructor(protected toDoListService: DataService) {}
}
