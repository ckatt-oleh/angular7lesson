import { Component, OnInit } from '@angular/core';
import { CarService } from './cars.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private carsService: CarService){}

  ngOnInit(): void {
    this.carsService
      .getCars()
      .subscribe((response) => {
        console.log(response)
      });
  }

  cars = [];
}
