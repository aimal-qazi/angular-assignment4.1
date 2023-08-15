import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  carsId: any;
  car: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    public service: DataService
  ) {}

  ngOnInit(): void {
    this.carsId = this.activatedRoute.snapshot.paramMap.get('id');
    this.car = this.service.list.find((a) => a.id == this.carsId);
  }
}
