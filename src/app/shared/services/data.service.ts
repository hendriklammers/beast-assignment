import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { environment } from '../../../environments/environment';

@Injectable()
export class DataService {
  // Use url from environment settings,
  // which currently is just a hardcoded json file
  private url = environment.imageDataUrl;

  constructor(private http: Http) {}

  // Returns Observable with json
  getImageData() {
    return this.http.get(this.url)
      .map(res => res.json());
  }
}

