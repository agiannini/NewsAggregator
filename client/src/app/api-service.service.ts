import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';


let guardianHeader = {
  headers: new HttpHeaders({
        'api-key' : 'ebe21b59-c243-4a96-b1c5-6003a7eb568d',
        'Access-Control-Allow-Origin': '*'
})
};



@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  getGuardianSearch() {
    return this.http.get('https://content.guardianapis.com/search?q=Brexit&show-fields=thumbnail&api-key='+environment.guardian_key);
  }

  searchGuardian(term){
    return this.http.get('https://content.guardianapis.com/search?q='+term+'&show-fields=thumbnail&api-key='+environment.guardian_key);
  }

  searchNYT(term){
    return this.http.get('https://api.nytimes.com/svc/search/v2/articlesearch.json?q='+term+'&api-key='+environment.nytimes_key)
  }

  searchCategoryNYT(categoryName){
    return this.http.get('https://api.nytimes.com/svc/topstories/v2/'+categoryName+'.json?api-key='+environment.nytimes_key)
  }

// The gaurdians category APIc needs a header attached
  searchGuardianCategories(categoryName){
    return this.http.get('https://content.guardianapis.com/'+categoryName+"?api-key="+environment.guardian_key);
  }

  searchNewsAPI(term){
    return this.http.get('https://newsapi.org/v2/everything?q='+term+'&language=en&sortBy=publishedAt&pageSize=100&apiKey='+environment.newsAPI_key);
  }

  NewsAPI_Headlines(){
    return this.http.get('https://newsapi.org/v2/top-headlines?country=us&pageSize=100&apiKey='+environment.newsAPI_key);
  }
}
