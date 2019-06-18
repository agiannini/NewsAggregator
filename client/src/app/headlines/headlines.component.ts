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

// This calls the NYT data and adds an image to any items without them
    callService(){
      this.api.searchNYT(this.searchTerm)
          .subscribe((data) => {
            this.timesResults = data["response"].docs;
            console.log(this.timesResults);
            for (var x in this.timesResults){
              if(this.timesResults[x].multimedia.length == 0){
                this.img = {'url': 'images/2019/06/17/science/17DOGS/17DOGS-threeByTwoMediumAt2X.jpg?quality=75&auto=webp&disable=upscale&width=600'};
                this.timesResults[x].multimedia.push(this.img);
              }

            }
            console.log(this.timesResults);
          })

          this.api.searchGuardian(this.searchTerm)
          .subscribe((data) => {
            this.guardianResults = data["response"].results;
              console.log(this.guardianResults);
          })
      }
    }






//  getImage(url) {
//    console.log("The URL is "+url);
//    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
//  }
