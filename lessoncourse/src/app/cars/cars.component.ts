import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  // selector: '[app-cars]',
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {

  cars: { name: string, year: number }[] = [{
    name: 'Ford',
    year: 2016
  },{
    name: 'Mazda',
    year: 2016
  },{
    name: 'Audi',
    year: 2016
  }];
  items = [{id: 3, name: 'item 1'}, {id: 6, name: 'item 2'}, {id: 9, name: 'item 3'}];
  dates = [
    new Date(2015, 3, 4).toDateString(),
    new Date(2011, 2, 5).toDateString(),
    new Date(2017, 4, 6).toDateString(),
    new Date(2000, 1, 7).toDateString()
  ];

  constructor() {
  }

  updateCarList(car: {name: string, year: number}){
    this.cars.push(car);
  }
}
