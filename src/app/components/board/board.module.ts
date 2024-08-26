import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BoardComponent} from "./board.component";
import {MatInputModule} from "@angular/material/input";
import {SharedModule} from "../../shared/shared.module";



@NgModule({
  declarations: [
    BoardComponent,
  ],
  imports: [
    CommonModule,
    MatInputModule,
    SharedModule,
  ],
  exports: [
    BoardComponent,
  ],
})
export class BoardModule { }
