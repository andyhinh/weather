import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-detail',
  templateUrl: './search-detail.component.html',
  styleUrls: ['./search-detail.component.css']
})
export class SearchDetailComponent implements OnInit {

  @Input() data: any;

  weatherStatus: string;

  constructor() { }

  ngOnInit() {
  }

}
