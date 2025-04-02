import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-first',
  template: `
    <div *ngIf="items">
      <div *ngFor="let item of items">
        <p>{{ item.name }}</p>
      </div>
    </div>
  `,
})
export class FirstComponent implements OnInit {
  items: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getItems().subscribe((data) => {
      this.items = data;
    });
  }
}