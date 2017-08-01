import { Component, OnInit } from '@angular/core';
import { Feature } from '../feature';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { FeaturesService } from '../features.service';

@Component({
  selector: 'app-feature-details',
  templateUrl: './feature-details.component.html',
  styleUrls: ['./feature-details.component.css']
})
export class FeatureDetailsComponent implements OnInit {
  public feature: Feature;

  constructor(private route: ActivatedRoute, private featuresService: FeaturesService) {
  }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.featuresService.getBySlug(params.get('slug')))
      .subscribe(feature => this.feature = feature);
  }
}
