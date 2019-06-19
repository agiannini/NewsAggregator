import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service'
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-headlines',
  templateUrl: './headlines.component.html',
  styleUrls: ['./headlines.component.css']
})
export class HeadlinesComponent implements OnInit {

  headlines = null;
  newsAPI_results = [];
  guardianResults = [];
  timesResults = [];
  searchTerm = "";
  imageCheck: boolean = false;
  img = {};
  constructor(private route: ActivatedRoute, private api:ApiServiceService) {
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.searchTerm = params['term'];
        this.callService();
      });
    }

// Purpose: to call the service class to retriece results for the given search
// Notes:   After the NYT call, it adds pictures to any without
    callService(){
      this.api.searchNYT(this.searchTerm)
          .subscribe((data) => {
            this.timesResults = data["response"].docs;
            //console.log(this.timesResults);
            for (var x in this.timesResults){
              if(this.timesResults[x].multimedia.length == 0){
                this.img = {'url': 'images/2019/06/17/science/17DOGS/17DOGS-threeByTwoMediumAt2X.jpg?quality=75&auto=webp&disable=upscale&width=600'};
                this.timesResults[x].multimedia.push(this.img);
              }
            }
          })

          this.api.searchGuardian(this.searchTerm)
          .subscribe((data) => {
            this.guardianResults = data["response"].results;
            //  console.log(this.guardianResults);
          })

          this.api.searchNewsAPI(this.searchTerm)
          .subscribe((data) =>{
            console.log(data["articles"]);
            this.newsAPI_results = data["articles"];
          })


      }
    }






//  getImage(url) {
//    console.log("The URL is "+url);
//    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
//  }
