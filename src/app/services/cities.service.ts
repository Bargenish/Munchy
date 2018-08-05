import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};
const DGOV = 'https://data.gov.il'
const citiesURI = `${DGOV}/api/action/datastore_search?resource_id=d4901968-dad3-4845-a9b0-a57d027f11ab`;
@Injectable({
  providedIn: 'root'
})
export class CitiesService {
  public cities: Observable<Object[]> = Observable.create(observer => {
    this.getCities(observer);
  });
  constructor(private http: HttpClient) {
  }

  private getCities(observer) {
    this.http.get(citiesURI).subscribe((body) => this.handleResponse(body, observer));
  }

  handleResponse = (body: any, observer: Observer<Object[]>) => {
    if (body.success) {
      if (body.result.records.length > 0) {
        observer.next(body.result.records);

        this.http.get(
          `${DGOV}${body.result._links.next}`
        ).subscribe((body) => this.handleResponse(body, observer));
      }
    }
  }
}
