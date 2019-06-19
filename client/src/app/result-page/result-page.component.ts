import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from '../api-service.service'

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.css']
})
export class ResultPageComponent implements OnInit {


  topHeadlines = [];
  constructor(private api:ApiServiceService) { }

  ngOnInit() {
    this.api.NewsAPI_Headlines()
    .subscribe((data) => {
      console.log(data["articles"]);
      this.topHeadlines = data["articles"];
    })


  }

}
