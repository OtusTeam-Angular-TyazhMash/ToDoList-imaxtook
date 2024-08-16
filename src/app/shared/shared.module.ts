import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { TooltipDirective } from './tooltip/tooltip.directive';
import { ToastsComponent } from './toasts/toasts.component';

@NgModule({
  declarations: [
    ButtonComponent,
    TooltipComponent,
    TooltipDirective,
    ToastsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent,
    TooltipComponent,
    TooltipDirective,
    ToastsComponent
  ]
})
export class SharedModule { }
