import { Component, OnInit, Inject } from '@angular/core';
import { DALService } from '../../services/dal.service';
import { CitiesService } from '../../services/cities.service';
import { utf8Encode } from '../../../../node_modules/@angular/compiler/src/util';

@Component({

  selector: 'app-aside-menu',
  templateUrl: './aside-menu.component.html',
  styleUrls: ['./aside-menu.component.scss'],
  providers: [DALService, CitiesService]
})
export class AsideMenuComponent implements OnInit {

  public categoryData: Array<Object>;
  public cityData: Array<Object> = [];
  private citySource: Array<Object> = [];
  public deliveryTimeData: Array<{text: string, value: number}>;


  public categories: any[];

  public cities: any[];

  public deliveryTime: Array<{text: string, value: number}>= [
    { text: "Up to 30 minutes", value: 30 },
    { text: "Up to 45 minutes", value: 45},
    { text: "Up to an hour", value: 60},
    { text: "Up to 90 minutes", value: 90},
  ];

  constructor(@Inject(DALService) private dal: DALService,
              @Inject(CitiesService) private cityService: CitiesService) {
    this.dal.getEntities('category');

    setTimeout((() => {
      this.categoryData = this.dal.categories.slice();
    }).bind(this), 500);

    this.cityService.cities.subscribe(this.handleCities.bind(this));
    this.deliveryTimeData = this.deliveryTime.slice();
  }

  handleCities = async (cities: Object[]) => {
    this.citySource = this.citySource.concat(cities);
    this.cityData = this.citySource.slice();
  }
    
  ngOnInit() {
    
  }
  handleCategoryFilter(value) {
    this.categoryData = this.dal.categories.filter((s) => s.name.toLowerCase().indexOf(value.toLowerCase()) !== -1).slice();
  }
  handleCityFilter(value) {
    this.cityData = this.citySource.filter((s) => s['שם_ישוב'].indexOf(value.toLowerCase()) !== -1).slice();
  }
  handleDeliveryFilter(value) {
    this.deliveryTimeData = this.deliveryTime.filter((s) => s.text.toLowerCase().indexOf(value.toLowerCase()) !== -1);
  }
}
