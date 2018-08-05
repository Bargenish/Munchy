import { Component, OnInit, Inject } from '@angular/core';
import { DALService } from '../../services/dal.service';
import { GeocodingService } from './geocoding.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  lat: number = 32.077889;
  lng: number = 34.768352;
  
  locations: Array<{lat: number, long: number}> = [];

  constructor(@Inject(DALService) private dal: DALService,
              @Inject(GeocodingService) private geo: GeocodingService) { 
    this.dal.getEntities('seller');
  }

  ngOnInit() {
    setTimeout((() => {
      this.dal.sellers.forEach(((seller) => {
        this.geo.addressToLatLong(seller.location).subscribe((res) => {
          const currLoc = res.results[0].geometry.location;
  
          this.locations.push({lat: currLoc.lat, long: currLoc.lng});
        }); 
      }).bind(this));
    }).bind(this), 1000);
  }
}
