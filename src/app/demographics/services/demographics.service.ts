import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class DemographicsService {
  api = '/demographics';
  constructor() {}

  /* getDemography(): Observable<any> {
    return this.httpclient.get(this.api);
  }*/
}
