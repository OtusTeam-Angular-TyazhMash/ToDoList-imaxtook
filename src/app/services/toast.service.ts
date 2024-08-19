import { ApplicationRef, ComponentRef, EmbeddedViewRef, Injectable, createComponent } from '@angular/core';
import { ToastsComponent } from '../shared/toasts/toasts.component';
import { BehaviorSubject, delay, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private componentRef: ComponentRef<ToastsComponent> | null = null;
  private toasts$ = new BehaviorSubject<string[]>([]);

  constructor(private applicationRef: ApplicationRef) { }

  showToast(toast: string, duration: number = 5000) {
    this.createToastComponent();
    this.toasts$.next([...this.toasts$.value, toast]);
    this.toasts$.pipe(
      delay(duration), take(1)
    ).subscribe(() => {
      this.deleteToast();
    });
  }

  get getToasts() {
    return this.toasts$.value;
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
    this.toasts$.value.splice(0, 1);
  }
}
