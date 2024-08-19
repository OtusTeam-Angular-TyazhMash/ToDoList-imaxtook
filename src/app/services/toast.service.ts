import { ApplicationRef, ComponentRef, EmbeddedViewRef, Injectable, createComponent } from '@angular/core';
import { ToastsComponent } from '../shared/toasts/toasts.component';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private componentRef: ComponentRef<ToastsComponent> | null = null;
  private toasts: string[] = [];

  constructor(private applicationRef: ApplicationRef) { }

  showToast(toast: string, duration: number = 5000) {
    this.toasts.push(toast);
    this.createToastComponent();
    setTimeout(() => this.deleteToast(), duration);
  }

  get getToasts() {
    return this.toasts;
  }

  private createToastComponent(): void {
    if (!this.componentRef) {
        this.componentRef = createComponent(
            ToastsComponent, {
            environmentInjector: this.applicationRef.injector,
        });
        this.applicationRef.attachView(this.componentRef.hostView)
        const domElement = (this.componentRef.hostView as EmbeddedViewRef<HTMLElement>).rootNodes[0] as HTMLElement;
        document.body.appendChild(domElement);
    }
  }

  private deleteToast(): void {
    this.toasts = this.toasts.splice(1);
  }
}
