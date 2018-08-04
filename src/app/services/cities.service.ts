import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {
  public cities: Object[];

  constructor() {
    var data = {
      resource_id: 'd4901968-dad3-4845-a9b0-a57d027f11ab', // the resource id
      limit: 5, // get 5 results
      q: 'jones' // query for 'jones'
    };
    $.ajax({
      url: 'https://data.gov.il/api/action/datastore_search',
      data: data,
      dataType: 'jsonp',
      success: function(data) {
        alert('Total results found: ' + data.result.total)
      }
    });
   }
}
