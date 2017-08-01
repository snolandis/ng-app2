import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Feature } from './feature';
import { observable } from 'rxjs/symbol/observable';

@Injectable()
export class FeaturesService {

  constructor(private http: Http) {
  }

  getAll(): Observable<Feature[] | any> {
    return this.http.get('./assets/features.json')
      .map((res: any) => res.json())
      .catch((error: any) => error);

  }

  getLatest(): Observable<Feature[] | any> {
    return new Observable((observer) => {
      this.getAll()
        .subscribe(
          (data: Feature[]) => {
            observer.next(data.reverse().slice(0, 4));

          }
        );
    });
  }

  getBySlug(slug: string): Observable<Feature | any> {
    return new Observable((observer) => {
      this.getAll()
        .subscribe(
          (data: Feature[]) => {
            const feature = data.filter((obj) => obj.slug === slug);
            observer.next(feature[0]);

          }
        );
    });
  }
}
