import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from '../api-service.service'

@Component({
  selector: 'app-news-categories',
  templateUrl: './news-categories.component.html',
  styleUrls: ['./news-categories.component.css']
})
export class NewsCategoriesComponent implements OnInit {

  constructor(private route: ActivatedRoute, private api: ApiServiceService) { }

  categoryName = "";
  timesResults = [];
  guardianResults = [];
  newsAPI_Results = [];
  img = {};
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.categoryName = params['term'];
      this.callService();
    });
  }

  callService() {
    this.api.searchCategoryNYT(this.categoryName)
      .subscribe((data) => {
        this.timesResults = data["results"];
        for (var x in this.timesResults) {
          if (this.timesResults[x].multimedia.length == 0) {
            this.img = { 'url': 'https://static01.nyt.com/images/2015/02/06/admin/the-new-york-times-masthead-1423244159624/the-new-york-times-masthead-1423244159624-facebookJumbo.png' };
            this.timesResults[x].multimedia.push(this.img);
          }
        }
      })


    switch (this.categoryName) {
      case "theater": {
        this.api.searchGuardianCategories('stage')
          .subscribe((data) => {
            this.guardianResults = data["response"].results;
          })

          this.api.searchNewsAPI('broadway')
          .subscribe((data) =>{
            console.log(data);
            this.newsAPI_Results= data["articles"];
          })

        break;

      }
      case "arts": {
        this.api.searchGuardianCategories('culture')
          .subscribe((data) => {
            this.guardianResults = data["response"].results;
          })
          this.api.searchNewsAPI('art')
          .subscribe((data) =>{
            console.log(data);
            this.newsAPI_Results= data["articles"];
          })
        break;
      }
      case "sports": {
        this.api.searchGuardianCategories('sport')
          .subscribe((data) => {
            this.guardianResults = data["response"].results;
          })

          this.api.searchNewsAPI('sports')
          .subscribe((data) =>{
            console.log(data);
            this.newsAPI_Results= data["articles"];
          })

        break;
      }
      case "opinion": {
        this.api.searchGuardianCategories('commentisfree')
          .subscribe((data) => {
            this.guardianResults = data["response"].results;
          })
          this.api.searchNewsAPI('opinion')
          .subscribe((data) =>{
            console.log(data);
            this.newsAPI_Results= data["articles"];
          })
        break;
      }

      default: {

        this.api.searchGuardianCategories(this.categoryName)
          .subscribe((data) => {
            this.guardianResults = data["response"].results;
          })
          this.api.searchNewsAPI(this.categoryName)
          .subscribe((data) =>{
            console.log(data);
            this.newsAPI_Results= data["articles"];
          })
        break;
      }
    }


  }
}
