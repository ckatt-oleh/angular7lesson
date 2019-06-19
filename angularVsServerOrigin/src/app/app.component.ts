import { Component } from '@angular/core';
import { CarService } from './cars.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private carsService: CarService){}

  loadCars() {
    this.carsService
      .getCars()
      .subscribe((response) => {
        console.log(response);
      });
  }

  cars = [];
}
