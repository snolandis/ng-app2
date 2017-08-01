import { Component, OnInit, Input } from '@angular/core';
import { Feature } from '../feature';

@Component({
  selector: 'app-feature-card',
  templateUrl: './feature-card.component.html',
  styleUrls: ['./feature-card.component.css']
})
export class FeatureCardComponent implements OnInit {
  @Input() feature: Feature;

  constructor() { }

  ngOnInit() {
  }
  
}


// old code
//   features: [
//     {
//       "slug": "feature-title-1",
//       "title": "Feature Title 1",
//       "excerpt": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
//       "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
//       "image":"http//placehold.it/600x300"
//     },
//    {
//       "slug": "feature-title-2",
//       "title": "Feature Title 2",
//       "excerpt": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
//       "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
//       "image":"http//placehold.it/600x300"
//     }
// ]
