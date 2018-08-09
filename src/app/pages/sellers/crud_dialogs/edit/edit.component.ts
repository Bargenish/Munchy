import { Component, OnInit, Input } from '@angular/core';
import { DALService } from '../../../../services/dal.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
  providers: [DALService]

})
export class EditComponent implements OnInit {
  public opened: boolean = false;
  model: any = {};
  public categories: Array<string> =['Snacks',"Sushi","Thai","Noodles","Pizza","Hamburger","Sweets"];
  @Input() public seller: any;
  constructor(private dal: DALService) { }

  ngOnInit() {    
  }

  public close(status) {
    console.log(`Dialog result: ${status}`);
    this.opened = false;
  }

  public open() {
    this.opened = true;
  }

  public getSellerName(){
    return this.seller.name;
  }
  onSubmit(){
    this.model.maxDeliveryTime = parseInt(this.model.maxDeliveryTime);
    this.model._id = this.seller._id;
   // var x =  JSON.stringify(this.model);
    this.dal.updateEntity("seller", this.model).subscribe(()=> {return true;});
    this.opened = false;
    alert('SUCCESS!! \n\n' + JSON.stringify(this.model))
  }
}
