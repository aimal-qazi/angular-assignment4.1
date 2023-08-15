import { Component, OnInit } from '@angular/core';
import { DataService } from '../vehicle/services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-show',
  templateUrl: './category-show.component.html',
  styleUrls: ['./category-show.component.css'],
})
export class CategoryShowComponent implements OnInit {
  carId: any;
  carCat: any;
  singleCarCat: any;
  constructor(
    public service: DataService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.carId = this.activatedRoute.snapshot.paramMap.get('cat');
    this.carCat = this.service.category.find((i) => i.id == this.carId);
    this.singleCarCat = this.carCat.name;
  }
}
