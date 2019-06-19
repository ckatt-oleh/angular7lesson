import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()

export class CarService {
    constructor(private http: HttpClient) {}

    getCars() {
        return this.http.get('http://localhost:3000/cars')
            .pipe(map(cars => { return cars}));
    }

    addCar(carName: string, carColor: string) {
        const data = {
            name: carName,
            color: carColor
        };
        return this.http.post('http://localhost:3000/cars', data)
            .pipe(map(cars => { return cars}));
    }

    changeColor(car: any, color: string){
        car.color = color
        return this.http.put(`http://localhost:3000/cars/${car.id}`, car)
            .pipe(map(cars => { return cars}));
    }

    deleteCarFromDB(car: any) {
        return this.http.delete(`http://localhost:3000/cars/${car.id}`)
            .pipe(map(cars => { return cars}));
    }

}