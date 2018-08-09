import { Component, OnInit, Inject, Input } from '@angular/core';
import { orderBy, SortDescriptor, State } from '../../../../node_modules/@progress/kendo-data-query';
import { DALService } from '../../services/dal.service';
import { GridDataResult, DataStateChangeEvent } from '../../../../node_modules/@progress/kendo-angular-grid';
import { process } from '@progress/kendo-data-query';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
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

public state: State = {
  skip: 0,
  take: 5,

  // Initial filter descriptor
  filter: {
    logic: 'and',
    filters: [{ field: 'name', operator: 'contains', value: 'river' }]
  }
};

public dataStateChange(state: DataStateChangeEvent): void {
  this.state = state;
  this.gridViewData = process(this.dal.sellers, this.state);
}

}
