import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable()

export class CarService {
    constructor(private http: HttpClient) {}

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          console.error('An error occurred:', error.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.error(
            `Backend returned code ${error.status}, ` +
            `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return throwError(
          'Something bad happened; please try again later.');
      };

    private headerOptions = {
        headers: new HttpHeaders({
            'Content-Type':  'application/json charset-utf8',
            'Authorization': 'my-auth-token',
           })
    }

    getCars() {        
        return this.http.get('http://localhost:3000/cars', this.headerOptions)
            .pipe(map(cars => { return cars}), catchError(this.handleError));
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