import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';

import { AppComponent } from './app.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { TodoCreateItemComponent } from './components/todo-create-item/todo-create-item.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutesComponent } from './app.routes';
import { ToDoItemViewComponent } from './components/to-do-item-view/to-do-item-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    ListItemComponent,
    TodoCreateItemComponent,
    ToDoItemViewComponent
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
