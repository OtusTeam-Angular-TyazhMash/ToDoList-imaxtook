import { Injectable } from '@angular/core';
import { ToastService } from 'src/app/services/toast.service';
import { Router } from '@angular/router';
import { ObservablesService } from './observables.service';
import { BehaviorSubject, delay, map, take } from 'rxjs';

export class Status {
  static ALL = null;
  static InProgress = "InProgress";
  static Complete = "Complete";
}

export class Item {
  id!: number;
  text!: string;
  description!: string;
  status!: Status;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private url: string = 'http://localhost:3000/tasks';
  private itemList$ = new BehaviorSubject<Item[]>([]);
  text: string = '';
  description: string = '';
  isLoading: boolean = true;
  editedId!: number;
  filterStatus: Status|null = Status.ALL;

  constructor(
    private toastService: ToastService,
    private router: Router,
    private observables: ObservablesService
  ) {
    this.loadItemList();
  }

  deselect() {
    this.router.navigate(['']);
    this.editedId = -1;
  }

  getItem(id: number) {
    return this.itemList$.value.find(item => item.id === id);
  }

  getItemList(filterStatus: Status|null) {
    if (filterStatus == null) return this.itemList$;

    return this.itemList$.pipe(
      map(items => items.filter(item => item.status === filterStatus))
    );
  }

  loadItemList() {
    this.isLoading = true;

    this.observables.httpGet<Item[]>(this.url)
    .subscribe({
      next: items => {
        this.itemList$.next(items);
        this.itemList$.pipe(
          delay(200), take(1)
        ).subscribe(() => {
          this.isLoading = false;
          this.toastService.showToast("Data received");
        });
      }
    });
  }

  addItem(text: string, addDescription: string) {
    if (!text) return;

    this.observables.httpPost(this.url,
      {
        text: text,
        description: addDescription,
        status: Status.InProgress
      }
    ).subscribe({
      next: (item) => {
        this.itemList$.next([...this.itemList$.value, item as Item]);
        this.text = '';
        this.description = '';
        this.toastService.showToast("Item added");
      }
    });
  }

  deleteItem(id: number) {
    this.observables.httpDelete(this.url, id)
    .subscribe({
      next: () => {
        this.itemList$.next(this.itemList$.value.filter(it => it.id !== id));
        this.toastService.showToast("Item deleted")
      } 
    });
  }

  editItem(id: number, text: string) {
    if (!text) return;

    this.observables.httpPatch(this.url, id, {text: text})
    .subscribe({
      next: () => {
        this.getItem(id)!.text = text;
        this.editedId = -1;
        this.toastService.showToast("Item edited")
      }
    });
  }

  setStatus(id: number) {
    var status = Status.InProgress;
    if (this.getItem(id)!.status === Status.InProgress) {
      status = Status.Complete;
    }
    this.observables.httpPatch(this.url, id, {status: status})
    .subscribe({
      next: () => {
        this.getItem(id)!.status = status;
      }
    });
  }
}
