import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { TooltipDirective } from './tooltip/tooltip.directive';

@NgModule({
  declarations: [
    ButtonComponent,
    TooltipComponent,
    TooltipDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent,
    TooltipComponent,
    TooltipDirective
  ]
})
export class SharedModule { }
