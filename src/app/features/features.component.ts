import { Component, OnInit } from '@angular/core';
import { Feature } from '../features/feature';
import { FeaturesService } from './features.service';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {
  features: Feature[];

  constructor(private featuresService: FeaturesService) {}

    ngOnInit() {
      this.featuresService.getAll()
        .subscribe(
          (data: Feature[]) => {
            this.features = data;
            }
          );
      }
}
