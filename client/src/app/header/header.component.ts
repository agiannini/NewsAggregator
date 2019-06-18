import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from '../api-service.service'
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  searchTerm: any = {};

  constructor(private api:ApiServiceService) { }

  ngOnInit() {
  }


}
