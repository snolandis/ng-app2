import { Component, OnInit } from '@angular/core';
import { Feature } from '../feature';

@Component({
  selector: 'app-feature-details',
  templateUrl: './feature-details.component.html',
  styleUrls: ['./feature-details.component.css']
})
export class FeatureDetailsComponent implements OnInit {
  public feature: Feature;


  constructor() { }

  ngOnInit() {
  }

}
