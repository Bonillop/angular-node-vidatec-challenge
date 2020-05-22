import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  movies: any[];
  currentPage: number = 1;
  noMovies: boolean = false;

  constructor(private _csv: MovieService) { }

  ngOnInit(): void {
    this._csv.getMovies().subscribe((result: any) => {
      if(result.data.length > 0){
        this.movies = result.data;
      } else {
        this.noMovies = true;
      }
    });
  }

}
