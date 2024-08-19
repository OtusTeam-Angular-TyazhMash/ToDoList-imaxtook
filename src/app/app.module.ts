import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';

import { AppComponent } from './app.component';
import { BacklogComponent } from './components/backlog/backlog.component';
import { ListItemComponent } from './components/backlog/list-item/list-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { TodoCreateItemComponent } from './components/backlog/todo-create-item/todo-create-item.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutesComponent } from './app.routes';
import { ToDoItemViewComponent } from './components/backlog/to-do-item-view/to-do-item-view.component';
import { BoardComponent } from './components/board/board.component';

@NgModule({
  declarations: [
    AppComponent,
    BacklogComponent,
    ListItemComponent,
    TodoCreateItemComponent,
    ToDoItemViewComponent,
    BoardComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    HttpClientModule,
    BrowserAnimationsModule, 
    MatInputModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatRadioModule,
    SharedModule,
    AppRoutesComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
