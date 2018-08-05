import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

const geocodingServiceURI = 'https://maps.googleapis.com/maps/api/geocode/json';

@Injectable({
  providedIn: 'root'
})
export class GeocodingService {

  constructor(private http: HttpClient) { }

  public addressToLatLong = (address: string) => {
    const params = new HttpParams()
                    .set('address', address)
                    .set('key', 'AIzaSyDIwXwMv1L8-KCq1aO6wCJ9FYxNpigsM_I');

    return this.http.get<any>(geocodingServiceURI, { params });
  }
}
