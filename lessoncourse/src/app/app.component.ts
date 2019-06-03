import { Component, OnInit } from '@angular/core';
import { CarService } from "./car.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [CarService]
})
export class AppComponent implements OnInit {

  cars = [];

  constructor(private service: CarService){

  }
  ngOnInit(){
    this.cars = this.service.cars;
  }
}
