import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { DALService } from '../../../../services/dal.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  providers: [DALService],
  encapsulation: ViewEncapsulation.None
})
export class CreateComponent implements OnInit {
  public opened: boolean = false;
  //public categories: Array<Object>=[{name:"Snacks"},{name:"Sushi"},{name:"Thai"},{name:"Noodles"},{name:"Pizza"},{name:"Hamburger"},{name:"Sweets"}];
  public categories: Array<string> =['Snacks',"Sushi","Thai","Noodles","Pizza","Hamburger","Sweets"];
  model: any = {};


  constructor(private dal: DALService) { 
  }

  ngOnInit() {
    
  }

  public close(status) {
    console.log(`Dialog result: ${status}`);
    this.opened = false;
  }

  public open() {
    this.opened = true;
  }

  onSubmit(){
    this.model.orderNum=0;
    this.model.maxDeliveryTime = parseInt(this.model.maxDeliveryTime);
    var x =  JSON.stringify(this.model);
    this.dal.createEntity("seller", x).subscribe(()=> {return true;});
    this.opened = false;
    alert('SUCCESS!! \n\n' + JSON.stringify(this.model))
  }
}
