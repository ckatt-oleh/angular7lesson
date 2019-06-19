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
}