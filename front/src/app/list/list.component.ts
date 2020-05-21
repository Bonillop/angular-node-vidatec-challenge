import { Component, OnInit } from '@angular/core';
import { CsvService } from '../csv.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  movies: any[];

  constructor(private _csv: CsvService) { }

  ngOnInit(): void {
    this._csv.getMovies().subscribe((data: any) => {
      this.movies = data.list;
      console.log(this.movies);
    });
  }

}
