import { Component } from '@angular/core';
import { CarService } from './cars.service';

interface Cars {
  name: string;
  color: string;
  id: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  colors = [
    'red', 
    'blue', 
    'green', 
    'yellow',
    'grey'
  ];
  cars: Cars[] = [];
  carName: string = '';
  carColor: string = '';

  constructor(private carsService: CarService){}

  loadCars() {
    this.carsService
      .getCars()
      .subscribe((cars: Cars[]) => {
        this.cars = cars;
      });
  }

  addCar() {
    this.carsService
      .addCar(this.carName, this.carColor)
      .subscribe((car: Cars) => {
        this.cars.push(car);
      });
    this.carName = '';
    this.carColor = '';
  }

  getRandColor() {
    const num = Math.round(Math.random() * (this.colors.length - 1));
    return this.colors[num]
  }

  setNewColor(car: Cars) {
    this.carsService.changeColor(car, this.getRandColor())
      .subscribe((data) => {
        console.log(data);
      });
  }
}
