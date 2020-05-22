import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  apiUri="/v1/movie";

  constructor(private http: HttpClient) { }

  getMovies() {
    return this.http.get(this.apiUri);
  }

  uploadCsv(formData: FormData) {
    return this.http.post(this.apiUri, formData);
  }
}
