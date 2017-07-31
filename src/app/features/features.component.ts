import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {
  features: [
    {
      "slug": "string",
      "title": "string",
      "excerpt": "string",
      "description": "string",
      "image": "string",
    }
]



  constructor() { }

  ngOnInit() {
  }

}
