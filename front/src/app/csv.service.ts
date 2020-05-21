import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CsvService {

  apiUri="/v1/csv";

  constructor(private http: HttpClient) { }

  getMovies() {
    return this.http.get('https://api.openweathermap.org/data/2.5/forecast?q=Paris&units=metric&appid=5e7c3e011b0d69313f88f7feb194959b')
  }

  uploadCsv(formData: FormData) {
    return this.http.post(this.apiUri, formData);
  }
}
