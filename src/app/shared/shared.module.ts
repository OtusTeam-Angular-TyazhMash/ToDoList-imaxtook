import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { ToastsComponent } from './toasts/toasts.component';
import { TooltipDirective } from './tooltip/tooltip.directive';

@NgModule({
  declarations: [
    ButtonComponent,
    SpinnerComponent,
    ToastsComponent,
    TooltipDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent,
    SpinnerComponent,
    ToastsComponent,
    TooltipDirective
  ]
})
export class SharedModule { }
