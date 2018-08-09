import { Component, OnInit, Input, Inject } from '@angular/core';
import { DALService } from '../../../services/dal.service';

@Component({
  selector: 'app-order-update',
  templateUrl: './order-update.component.html',
  styleUrls: ['./order-update.component.scss']
})
export class OrderUpdateComponent implements OnInit {
 @Input() public seller: any;
  constructor(@Inject(DALService) private dal: DALService) { }

  ngOnInit() {
  }
  order(){
    this.seller.orderNum = this.seller.orderNum+1;
     this.dal.updateEntity("seller", this.seller).subscribe((res) => console.log(res));
     alert(`Your order to  ${this.seller.name} was succefully added`);
   }
}
