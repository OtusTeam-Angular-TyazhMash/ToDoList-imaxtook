import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BacklogComponent } from './backlog.component';
import { ListItemComponent } from './list-item/list-item.component';
import { TodoCreateItemComponent } from './todo-create-item/todo-create-item.component';
import { ToDoItemViewComponent } from './to-do-item-view/to-do-item-view.component';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    BacklogComponent,
    ListItemComponent,
    TodoCreateItemComponent,
    ToDoItemViewComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild([
      { path: '', component: BacklogComponent }
    ])
  ],
  exports: [
    BacklogComponent,
    ListItemComponent,
    TodoCreateItemComponent,
    ToDoItemViewComponent
  ]
})
export class BacklogModule { }
