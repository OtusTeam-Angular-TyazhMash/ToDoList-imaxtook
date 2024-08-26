import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BacklogComponent } from './backlog.component';
import { ListItemComponent } from './list-item/list-item.component';
import { ToDoItemViewComponent } from './to-do-item-view/to-do-item-view.component';
import { TodoCreateItemComponent } from './todo-create-item/todo-create-item.component';

@NgModule({
  declarations: [
    BacklogComponent,
    ListItemComponent,
    ToDoItemViewComponent,
    TodoCreateItemComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    BacklogComponent,
  ],
})
export class BacklogModule { }
