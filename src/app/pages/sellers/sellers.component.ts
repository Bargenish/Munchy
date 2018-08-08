import { Component, OnInit, Inject } from '@angular/core';
import { SortDescriptor, orderBy } from '@progress/kendo-data-query';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { DALService } from '../../services/dal.service';

@Component({
  selector: 'app-sellers',
  templateUrl: './sellers.component.html',
  styleUrls: ['./sellers.component.scss'],
  providers: [DALService]
})
export class SellersComponent implements OnInit {
  public sort: SortDescriptor[] ;
  public gridViewData: GridDataResult;
  public sellersList: any[] = [];

  constructor(@Inject(DALService) private dal: DALService) { }


  ngOnInit() {
    setTimeout((() => {
      this.gridViewData = {
        data: this.dal.sellers,
        total: this.dal.sellers.length
      };
    }).bind(this), 500);
  }

  public sortChange(sort: SortDescriptor[]): void {
    this.sort = sort;
    this.loadSellers();
}
private loadSellers(): void {
  this.gridViewData = {
      data: orderBy(this.dal.sellers, this.sort),
      total: this.dal.sellers.length
  };
}
onEdit(){

}
onCreate(){

}

onDelete(){
  
}
}
