import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { TooltipDirective } from './tooltip/tooltip.directive';
import { ToastsComponent } from './toasts/toasts.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    ButtonComponent,
    TooltipComponent,
    TooltipDirective,
    ToastsComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatProgressSpinnerModule
  ],
  exports: [
    ButtonComponent,
    TooltipComponent,
    TooltipDirective,
    ToastsComponent,
    SpinnerComponent
  ]
})
export class SharedModule { }
