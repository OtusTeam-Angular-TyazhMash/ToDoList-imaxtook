import { Injectable } from '@angular/core';
import { ToastService } from 'src/app/services/toast.service';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

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
  private isLoading$ = new BehaviorSubject<boolean>(true);
  
  constructor(
    private toastService: ToastService,
    private httpClient: HttpClient,
    private router: Router
  ) {
    this.loadItemListFromServer().subscribe();
  }

  get items$(): Observable<Item[]> {
    return this.itemList$.asObservable();
  }

  get loading$(): Observable<boolean> {
    return this.isLoading$.asObservable();
  }

  deselect() {
    this.router.navigate(['']);
  }

  getItem(id: number): Observable<Item | undefined> {
    return this.items$.pipe(
      map(items => items.find(item => item.id === id))
    );
  }

  toDoFilter(filterStatus: Status | null): Observable<Item[]> {
    return this.items$.pipe(
      map(items => {
        if (filterStatus == null) return items;
        return items.filter(item => item.status === filterStatus);
      })
    );
  }

  loadItemListFromServer(): Observable<Item[]> {
    this.isLoading$.next(true);
    return this.httpClient.get<Item[]>(this.url).pipe(
      tap(items => {
        this.itemList$.next(items);
        this.isLoading$.next(false);
        this.toastService.showToast("Data received");
      }),
      catchError(error => {
        this.isLoading$.next(false);
        this.toastService.showToast("Failed to fetch data");
        throw error;
      })
    );
  }

  addItem(text: string, addDescription: string): Observable<Item> {
    if (!text) {
      return new Observable<Item>(); // Возвращаем пустой Observable, если нет текста
    }

    return this.httpClient.post<Item>(this.url, {
      text: text, 
      description: addDescription, 
      status: Status.InProgress
    }).pipe(
      tap(item => {
        this.itemList$.next([...this.itemList$.value, item]);
        this.toastService.showToast("Item added");
      }),
      catchError(error => {
        this.toastService.showToast("Failed to add item");
        throw error;
      })
    );
  }

  deleteItem(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.url}/${id}`).pipe(
      tap(() => {
        this.itemList$.next(this.itemList$.value.filter(it => it.id !== id));
        this.toastService.showToast("Item deleted");
      }),
      catchError(error => {
        this.toastService.showToast("Failed to delete item");
        throw error;
      })
    );
  }

  editItem(id: number, text: string): Observable<void> {
    if (!text) {
      return new Observable<void>(); // Возвращаем пустой Observable, если нет текста
    }

    return this.httpClient.patch<void>(`${this.url}/${id}`, { text }).pipe(
      tap(() => {
        const items = this.itemList$.value.map(item => {
          if (item.id === id) {
            return { ...item, text };
          }
          return item;
        });
        this.itemList$.next(items);
        this.toastService.showToast("Item edited");
      }),
      catchError(error => {
        this.toastService.showToast("Failed to edit item");
        throw error;
      })
    );
  }

  setStatus(id: number): Observable<void> {
    const item = this.itemList$.value.find(item => item.id === id);
    if (!item) {
      return new Observable<void>(); // Возвращаем пустой Observable, если item не найден
    }

    const newStatus = item.status === Status.InProgress ? Status.Complete : Status.InProgress;

    return this.httpClient.patch<void>(`${this.url}/${id}`, { status: newStatus }).pipe(
      tap(() => {
        const items = this.itemList$.value.map(it => {
          if (it.id === id) {
            return { ...it, status: newStatus };
          }
          return it;
        });
        this.itemList$.next(items);
      }),
      catchError(error => {
        this.toastService.showToast("Failed to update status");
        throw error;
      })
    );
  }
}
