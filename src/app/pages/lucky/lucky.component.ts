import { Component, OnInit, Inject } from '@angular/core';
import { DALService } from '../../services/dal.service';

@Component({
  selector: 'app-lucky',
  templateUrl: './lucky.component.html',
  styleUrls: ['./lucky.component.scss'],
  providers: [DALService]
})
export class LuckyComponent implements OnInit {
  constructor(@Inject(DALService) private dal: DALService) { }

  ngOnInit() {

  }

  private getTopSeller() {
    return this.dal.topSellers
      .sort((a, b) => b.orderNum - a.orderNum)
      .slice(0,2)
      .sort((a,b) => b.rating - a.rating)[0];
  }
}
