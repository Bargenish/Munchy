import { Component, OnInit } from '@angular/core';
import { SortDescriptor, orderBy } from '@progress/kendo-data-query';
import { GridDataResult } from '@progress/kendo-angular-grid';

@Component({
  selector: 'app-sellers',
  templateUrl: './sellers.component.html',
  styleUrls: ['./sellers.component.scss']
})
export class SellersComponent implements OnInit {
  public sort: SortDescriptor[] ;
  public gridViewData: GridDataResult;
  public sellersList: any[];
  constructor() { }

  ngOnInit() {
    this.gridViewData = {
      data: this.sellersList,
      total: this.sellersList.length
  };
  }
  public sortChange(sort: SortDescriptor[]): void {
    this.sort = sort;
    this.loadSellers();
}
private loadSellers(): void {
  this.gridViewData = {
      data: orderBy(this.sellersList, this.sort),
      total: this.sellersList.length
  };
}
}
