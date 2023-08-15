import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  carsList: any[] = [];
  constructor(public service: DataService) {}

  ngOnInit(): void {
    this.carsList = this.service.list;
  }
}
