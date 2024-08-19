import { Component, OnDestroy } from '@angular/core';
import { ObservablesService } from './services/observables.service';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'TasksBoard';

  constructor(protected data: DataService) {}
}
