import { Component } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { translations } from 'src/locale/translations';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})

export class ListItemComponent {
  readonly translations = translations;
  constructor(protected data: DataService) {}
}