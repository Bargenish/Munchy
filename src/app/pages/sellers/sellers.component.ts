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
  public sellersList: any[]= [{"_id":"5b5c627c33416106053be522","name":"River","categories":["Noodles"],"city":"תל אביב","location":"אבן גבירול 13, תל אביב","maxDeliveryTime":60,"imageName":"river.jpg","orderNum":0}];
  ;
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
onEdit(){

}
onCreate(){

}

onDelete(){
  
}
}
