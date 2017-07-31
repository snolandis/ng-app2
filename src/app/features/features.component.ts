import { Component, OnInit } from '@angular/core';
import { Feature } from '../features/feature';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {
  features: Feature[];

  constructor() { }

  ngOnInit() {
  }

}
