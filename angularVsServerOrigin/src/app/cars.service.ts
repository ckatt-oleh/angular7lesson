import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()

export class CarService {
    constructor(private http: HttpClient) {}

    httpOptions = {
        headers: new HttpHeaders({
        'Content-Type':  'application/json charset-utf8',
        'Authorization': 'my-auth-token',
       })
   };

    getCars() {
        return this.http.get('http://localhost:3000/cars', this.httpOptions)
            .pipe(map(cars => { return cars}));
    }

    addCar(carName: string, carColor: string) {
        const data = {
            name: carName,
            color: carColor
        };
        return this.http.post('http://localhost:3000/cars', data, this.httpOptions)
            .pipe(map(cars => { return cars}));
    }

    changeColor(car: any, color: string){
        car.color = color
        return this.http.put(`http://localhost:3000/cars/${car.id}`, car, this.httpOptions)
            .pipe(map(cars => { return cars}));
    }

    deleteCarFromDB(car: any) {
        return this.http.delete(`http://localhost:3000/cars/${car.id}`, this.httpOptions)
            .pipe(map(cars => { return cars}));
    }

}