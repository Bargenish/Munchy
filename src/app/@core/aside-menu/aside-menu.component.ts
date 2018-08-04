import { Component, OnInit } from '@angular/core';

@Component({

  selector: 'app-aside-menu',
  templateUrl: './aside-menu.component.html',
  styleUrls: ['./aside-menu.component.scss']
})
export class AsideMenuComponent implements OnInit {

  public categoryData: Array<{ text: string }>;
  public cityData: Array<{ text: string }>;
  public deliveryTimeData: Array<{ text: string }>;


  public category: Array<{ text: string }> = [
    { text: "Italian" },
    { text: "Medium" },
    { text: "Large" }
  ];

  public city: Array<{ text: string }> = [
    { text: "Italian" },
    { text: "Medium" },
    { text: "Large" }
  ];

  public deliveryTime: Array<{ text: string }> = [
    { text: "Italian" },
    { text: "Medium" },
    { text: "Large" }
  ];
  constructor() {
    this.categoryData = this.category.slice();
    this.cityData = this.city.slice();
    this.deliveryTimeData = this.deliveryTime.slice();
  }

  ngOnInit() {
  }
  handleCategoryFilter(value) {
    this.categoryData = this.category.filter((s) => s.text.toLowerCase().indexOf(value.toLowerCase()) !== -1);
  }
  handleCityFilter(value) {
    this.cityData = this.city.filter((s) => s.text.toLowerCase().indexOf(value.toLowerCase()) !== -1);
  }
  handleDeliveryFilter(value) {
    this.deliveryTimeData = this.deliveryTime.filter((s) => s.text.toLowerCase().indexOf(value.toLowerCase()) !== -1);
  }

}
