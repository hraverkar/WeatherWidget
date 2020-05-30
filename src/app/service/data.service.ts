import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpParams,
  HttpErrorResponse,
} from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public URL = 'https://api.openweathermap.org/data/2.5/weather?appid=';
  public APIKEY = 'a3f07567f71036c71a8e7a860b66a706';

  constructor(private httpClient: HttpClient) {}

  getLocationData(cityName: string) {
    return this.httpClient
      .get<any>(this.URL + this.APIKEY + '&q=' + cityName, {
        params: new HttpParams({}),
        observe: 'response',
      })
      .pipe(
        retry(3),
        catchError(this.handleError),
        tap((res) => {})
      );
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown Error';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error : ${error.error.message}`;
    } else {
      errorMessage = `Error : ${error.status} \nMessage : ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
