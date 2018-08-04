import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


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
  public cities: Object[] = [];

  constructor(private http: HttpClient) {
    this.http.get(
      citiesURI
    ).subscribe(this.handleResponse);
  }

  handleResponse = (body: any) => {
    if (body.success) {
      if (body.result.records.length > 0) {
        this.cities.push(body.result.records);

        this.http.get(
          `${DGOV}${body.result._links.next}`
        ).subscribe(this.handleResponse);
      }
    }
  }
}
