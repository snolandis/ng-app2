import { Component, OnInit } from '@angular/core';
import { Feature } from '../features/feature';
import { FeaturesService } from '../features/features.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  features: Feature[];


constructor(private featuresService: FeaturesService) {}

  ngOnInit() {
    this.featuresService.getLatest()
      .subscribe(
        (data: Feature[]) => {
          this.features = data;
        }
      );
  }
}
