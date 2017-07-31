import { Component, OnInit } from '@angular/core';
import { Feature } from '../features/feature';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  features: Feature[];


  constructor() { }

  ngOnInit() {
  }

}
