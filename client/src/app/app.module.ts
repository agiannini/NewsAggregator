import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { HeadlinesComponent } from './headlines/headlines.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ResultPageComponent } from './result-page/result-page.component';
import { TestDirective } from './test.directive';
import { NewsCategoriesComponent } from './news-categories/news-categories.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: ResultPageComponent },
  { path: 'search/:term', component: HeadlinesComponent },
  { path: 'categories/:term', component: NewsCategoriesComponent }

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeadlinesComponent,
    ResultPageComponent,
    TestDirective,
    NewsCategoriesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
  routes  )],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
